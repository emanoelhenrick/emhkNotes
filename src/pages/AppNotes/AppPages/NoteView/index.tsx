import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ViewerContainer } from "./styles";
import { NotesContext } from "../../context";

export function NoteView() {

  const { noteId } = useParams()

  const { notesList } = useContext(NotesContext)

  const note = notesList.find((note) => note.noteId === noteId)

  return (
    <ViewerContainer>
      <h1>{note?.noteTitle}</h1>
      <p>{note?.noteContent}</p>
    </ViewerContainer>
  )
}