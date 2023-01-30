import { createContext, useState } from "react";


interface NotesContextProps {
  notesList: NoteProps[]
  foldersList: FolderProps[]
  addNewNote: (note: NoteProps) => void
  addNewFolder: (folder: FolderProps) => void
}

interface NoteProps {
  noteTitle: string
  noteContent: string
  noteId: string
  folderId: string
}

interface newNoteProps {
  noteTitle: string
  noteContent: string
  folderId: string
}

interface FolderProps {
  folderTitle: string
  folderId: string
}

function generateID() {
  let array = new Uint32Array(4);
  window.crypto.getRandomValues(array);
  let str = "";
  for (let i = 0; i < array.length; i++) {
    str += array[i].toString(16);
  }
  return str;
}

export const NotesContext = createContext({} as NotesContextProps)

export function NotesContextProvider({ children }: any) {
  const [notesList, setNotesList] = useState<NoteProps[]>([])
  const [foldersList, setFoldersList] = useState<FolderProps[]>([])

  function addNewNote(props: newNoteProps) {
    
    const newNote = {
      noteContent: props.noteContent,
      noteTitle: props.noteTitle,
      noteId: generateID(),
      folderId: props.folderId
    }
    
    setNotesList(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  function addNewFolder(newFolder:any) {
    
    setFoldersList(prevFolders => {
      return [...prevFolders, newFolder]
    })

  }
  

  return (
    <NotesContext.Provider
    value={{
      notesList,
      foldersList,
      addNewNote,
      addNewFolder
    }}
    >
      {children}
    </NotesContext.Provider>
  )


}