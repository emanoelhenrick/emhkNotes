import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ViewerContainer } from "./styles";
import { NotesContext } from "../../context";
import { PencilLine } from "phosphor-react";
import { useNavigate } from "react-router-dom";



export function NoteView() {

  const navigate = useNavigate()

  const { noteId } = useParams()

  const { notesList } = useContext(NotesContext)

  const note = notesList.find((note) => note.noteId === noteId)

  function editNote() {
    navigate(`/app/edit/${noteId}`)
  }

  return (
    <ViewerContainer>
      <button onClick={editNote}>
        <span>
          Editar
        </span>
        <PencilLine size={20} weight="light" />
      </button>
      <h1>{note?.noteTitle}</h1>
      <p>{note?.noteContent}</p>
    </ViewerContainer>
  )
}