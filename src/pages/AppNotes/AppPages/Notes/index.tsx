import { Plus } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Note } from "./components/Note";
import { AddNote } from "./components/Note/styles";
import { FolderName, NotesContainer, NotesList } from "./styles";

const NotesArray = [
  {
    title: 'Primeira nota',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi quae voluptatum pariatur aut saepe tempora. Sed, in dicta illum hic qui voluptate dolore, quo quod ipsam cupiditate deleniti at?',
    id: 'A897DF'
  },
  {
    title: 'Segunda nota',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi quae voluptatum pariatur aut saepe tempora. Sed, in dicta illum hic qui voluptate dolore, quo quod ipsam cupiditate deleniti at?',
    id: 'A897OD'
  },
  {
    title: 'Terceira nota',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi quae voluptatum pariatur aut saepe tempora. Sed, in dicta illum hic qui voluptate dolore, quo quod ipsam cupiditate deleniti at?',
    id: 'A89739'
  }
]

export function Notes() {
  return (
    <NotesContainer>
      <FolderName>
      <h1>notas</h1>
      </FolderName>
      <NotesList>
        {NotesArray.map(note => {
          return <Note title={note.title} key={note.id} />
        })}

        <NavLink to="/app/create" title="Criar nota">
        <AddNote>
          <Plus size={24} />
        </AddNote>
        </NavLink>
        
      </NotesList>
    </NotesContainer>
  )
}