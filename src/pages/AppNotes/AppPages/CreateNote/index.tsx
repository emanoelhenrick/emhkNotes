import { useNavigate, useParams } from "react-router-dom";
import { ButtonSaveNote, NoteName, NotesContainer, NoteText } from "./styles";
import { useForm } from "react-hook-form";
import { NotesContext } from "../../context";
import { useContext, useState } from "react";

export function CreateNote() {

  const navigate = useNavigate()

  const { register, handleSubmit } = useForm()

  const {addNewNote, notesList, editNote } = useContext(NotesContext)

  
  const { folderId, noteId } = useParams()
  
  const currentNote = notesList.find((note) => {
    return note.noteId === noteId
  })
  
  const [textForm, setTextForm] = useState(currentNote?.noteContent)
  const [titleForm, setTitleForm] = useState(currentNote?.noteTitle)

  interface noteProps {
    noteTitle: string
    noteContent: string
    noteId?: string
    folderId?: string
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

  function handleEditNote(data: noteProps){
    const newNote = {
      noteTitle: data.noteTitle,
      noteContent: data.noteContent,
      folderId: currentNote?.folderId,
      noteId: noteId
    }

    editNote(newNote as any)

    navigate(`/app/note/${noteId}`)
  }

  if(folderId){
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

  if(noteId){
    return (
      <NotesContainer>
        <NoteName>
          <input
            type="text"
            placeholder="Título..."
            maxLength={45}
            value={titleForm}
            {...register('noteTitle')}

            onChange={(event) => setTitleForm(event.target.value)}
          />
        </NoteName>
  
        <form onSubmit={handleSubmit(handleEditNote as any)}>
  
        <NoteText
        value={textForm}
        {...register('noteContent')}
        onChange={(event) => setTextForm(event.target.value)}
        >
        </NoteText>
  
        <ButtonSaveNote type="submit">
            Salvar
        </ButtonSaveNote>
  
        </form>
      </NotesContainer>
    )

  } else {
    return <h1>deu nao</h1>
  }
}