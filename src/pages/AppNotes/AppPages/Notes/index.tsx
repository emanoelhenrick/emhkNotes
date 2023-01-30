import { Plus } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NotesContext } from "../../context";
import { Note } from "./components/Note";
import { AddNote } from "./components/Note/styles";
import { FolderName, NotesContainer, NotesList } from "./styles";
import { useParams } from "react-router-dom";


export function Notes() {

  const {notesList, foldersList} = useContext(NotesContext)

  const { folderId } = useParams()

  const folderName = foldersList.find((folder) => folder.folderId === folderId)

  const currentNotes = notesList.filter((note) => note.folderId === folderId)

  return (
    <NotesContainer>
      <FolderName>
            <h1>{folderName?.folderTitle}</h1>
          </FolderName>
          <NotesList>
            {currentNotes.map(note => {
              return <Note title={note.noteTitle} key={note.noteId} />
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