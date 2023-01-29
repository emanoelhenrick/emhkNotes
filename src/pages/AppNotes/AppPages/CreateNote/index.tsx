import { NavLink } from "react-router-dom";
import { ButtonSaveNote, NoteName, NotesContainer, NoteText } from "./styles";

export function CreateNote() {
  return (
    <NotesContainer>
      <NoteName>
        <input type="text" placeholder="Título..." />
      </NoteName>

      <form>

      <NoteText>
      </NoteText>

      
      <NavLink to="/app">
        <ButtonSaveNote>
          Salvar
        </ButtonSaveNote>
      </NavLink>
      

      </form>
    </NotesContainer>
  )
}