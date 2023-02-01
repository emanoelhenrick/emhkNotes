import { ArrowArcLeft, ArrowBendDownLeft, CaretLeft, Plus, Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NotesContext } from "../../context";
import { NoteContainer } from "./components/Note/styles";
import { AddNote, DivContainer, EditTitle, FolderName, NoFolder, NotesContainer, NotesList } from "./styles";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

interface EditedTitle {
  editedTitle: string
}

interface FolderProps {
  folderTitle: string
  folderId: string
}


export function Notes() {

  const navigate = useNavigate()

  const {notesList, foldersList, deleteFolder, deleteNote, editFolder} = useContext(NotesContext)

  const { folderId } = useParams()

  const { register, handleSubmit, reset } = useForm()

  const folderName = foldersList.find((folder) => folder.folderId === folderId)

  const currentNotes = notesList.filter((note) => note.folderId === folderId)

  const [isEditingTitle, setIsEditingTitle] = useState(false)

  useEffect(() => {

    if(folderId){
      const isFolderInclude = foldersList.find((folder) => {
        return folder.folderId === folderId
      })

      if(!isFolderInclude){
        navigate('/app')
      }
    }

    if(!folderId && foldersList.length > 0){
      return navigate(`/app/${foldersList[0].folderId}`)
    }

  }, [folderId, foldersList])

  function handleEditFolder(data: EditedTitle) {
    
    const dataValid = data.editedTitle === '' || data.editedTitle.startsWith(' ')

    const newFolderEdited = {
      folderTitle: dataValid ? folderName?.folderTitle : data.editedTitle,
      folderId
    }

    editFolder(newFolderEdited as FolderProps)
    reset()
    setIsEditingTitle(false)
  }

  function editingTitle() {
    if(!isEditingTitle){
      return (
        <>
          <h1 onDoubleClick={() => setIsEditingTitle(true)}>
            {folderName?.folderTitle}
          </h1>

          <button onClick={handleDeleteFolder}>
            <Trash size={24} />
          </button>
        </>
      )
    } else {
      return (
        <form onSubmit={handleSubmit(handleEditFolder as any)}>
          <EditTitle
            placeholder="Novo título..."
            autoFocus
            {...register('editedTitle')}
            onBlur={handleSubmit(handleEditFolder as any)}
            required
            >
            
          </EditTitle>
        </form>
      )
    }
  }
  

  function viewNote(noteId: any) {
    navigate(`/app/note/${noteId}`)
  }

  function handleDeleteFolder() {
    deleteFolder(folderId)
    navigate('/app')
  }

  function handleDeleteNote(noteId: string) {
    deleteNote(noteId);
    
  }

  function isFolderId() {

    if(!folderId){
      return (
        <NoFolder>
          <h1>crie uma pasta primeiro</h1>
          <ArrowBendDownLeft size={40} weight="thin" />
        </NoFolder>
      )
    } else {
      return (
      <NotesContainer>
        <FolderName>
          {editingTitle()}
        </FolderName>
        <NotesList>
          {currentNotes.map(note => {
            return (
              <DivContainer key={note.noteId}>
                <NoteContainer
                  onClick={() => viewNote(note.noteId)}
                >
                  {note.noteTitle}
                </NoteContainer>
                <button
                  onClick={() => handleDeleteNote(note.noteId)}
                  ><Trash size={14} />
                </button>
              </DivContainer>
            )
          })}
        <NavLink to={`/app/create/${folderId}`} title="Criar nota">
          <AddNote>
            <Plus size={24} color="black" />
            <span>new note</span>
          </AddNote>
        </NavLink>
        </NotesList>
      </NotesContainer>
      )
    }
    
  }

  return isFolderId()
}