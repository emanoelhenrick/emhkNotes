import { ArrowArcLeft, ArrowBendDownLeft, CaretLeft, Plus, Trash } from "phosphor-react";
import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NotesContext } from "../../context";
import { AddNote, NoteContainer } from "./components/Note/styles";
import { DivContainer, FolderName, NoFolder, NotesContainer, NotesList } from "./styles";
import { useParams } from "react-router-dom";


export function Notes() {

  const navigate = useNavigate()

  const {notesList, foldersList, deleteFolder, deleteNote} = useContext(NotesContext)

  const { folderId } = useParams()

  const folderName = foldersList.find((folder) => folder.folderId === folderId)

  const currentNotes = notesList.filter((note) => note.folderId === folderId)

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
          <h1>{folderName?.folderTitle}</h1>
          <button onClick={handleDeleteFolder}>
            <Trash size={24} />
          </button>
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
            <Plus size={24} />
          </AddNote>
        </NavLink>
        </NotesList>
      </NotesContainer>
      )
    }
    
  }

  return isFolderId()
}