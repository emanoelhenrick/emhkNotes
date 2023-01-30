import { ArrowBendDownLeft, Plus } from "phosphor-react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NotesContext } from "../../context";
import { AddNote, NoteContainer } from "./components/Note/styles";
import { FolderName, NoFolder, NotesContainer, NotesList } from "./styles";
import { useParams } from "react-router-dom";


export function Notes() {

  const navigate = useNavigate()

  const {notesList, foldersList} = useContext(NotesContext)

  const { folderId } = useParams()

  const folderName = foldersList.find((folder) => folder.folderId === folderId)

  const currentNotes = notesList.filter((note) => note.folderId === folderId)

  function viewNote(noteId: any) {
    navigate(`/app/note/${noteId}`)
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
        </FolderName>
        <NotesList>
          {currentNotes.map(note => {
            return (
              <NoteContainer
                key={note.noteId}
                onClick={() => viewNote(note.noteId)}
              >
                {note.noteTitle}
              </NoteContainer>
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