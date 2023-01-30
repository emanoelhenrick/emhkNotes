import { useNavigate, useParams } from "react-router-dom";
import { ButtonSaveNote, NoteName, NotesContainer, NoteText } from "./styles";
import { useForm } from "react-hook-form";
import { NotesContext } from "../../context";
import { useContext } from "react";

export function CreateNote() {

  const navigate = useNavigate()

  const { register, handleSubmit } = useForm()

  const {addNewNote} = useContext(NotesContext)

  const { folderId } = useParams()

  interface noteProps {
    noteTitle: string
    noteContent: string
  }

  function sendNewNote(data: noteProps) {
    const newNote = {
      noteTitle: data.noteTitle,
      noteContent: data.noteContent,
      folderId: folderId
    }

    addNewNote(newNote as any)

    navigate(`/app/${folderId}`)
  }

  return (
    <NotesContainer>
      <NoteName>
        <input
          type="text"
          placeholder="Título..."
          maxLength={45}
          {...register('noteTitle')}
        />
      </NoteName>

      <form onSubmit={handleSubmit(sendNewNote as any)}>

      <NoteText
        {...register('noteContent')}
      >
      </NoteText>

      <ButtonSaveNote type="submit">
          Salvar
      </ButtonSaveNote>

      </form>
    </NotesContainer>
  )
}