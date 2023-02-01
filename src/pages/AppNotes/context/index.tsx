import { createContext, useState, useEffect } from "react";


interface NotesContextProps {
  notesList: NoteProps[]
  foldersList: FolderProps[]
  addNewNote: (note: NoteProps) => void
  addNewFolder: (folder: FolderProps) => void
  deleteFolder: (folderId: string | undefined) => void
  deleteNote: (noteId: string | undefined) => void
  editNote: (data: NoteProps) => void
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

  const contentStored = localStorage.getItem('@emhk-notes:notes-and-folders')

  const [notesList, setNotesList] = useState<NoteProps[]>(() => {
    if(contentStored){
      const Stored = JSON.parse(contentStored)
      return Stored.notesList
    } else {
      return []
    }
  })
  const [foldersList, setFoldersList] = useState<FolderProps[]>(() => {
    if(contentStored){
      const Stored = JSON.parse(contentStored)
      return Stored.foldersList
    } else {
      return []
    }
  })

  useEffect(() => {
    const notesAndFolders = {
      notesList,
      foldersList
    }
    localStorage.setItem('@emhk-notes:notes-and-folders', JSON.stringify(notesAndFolders))
  }, [notesList, foldersList])

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

  function editNote(data: NoteProps){
    const newNotes = notesList.map((note) => {
      if(note.noteId === data.noteId){
        note.noteContent = data.noteContent
        note.noteTitle = data.noteTitle
        return note
      } else {
        return note
      }
    })
    
    setNotesList(newNotes)
  }

  function addNewFolder(newFolder:any) {
    
    setFoldersList(prevFolders => {
      return [...prevFolders, newFolder]
    })
  }

  function deleteFolder(folderId: string | undefined) {
    const newFolders = foldersList.filter((folder) => {
      return folder.folderId !== folderId
    })

    const newNotes = notesList.filter((note) => {
      return note.folderId !== folderId
    })

    setNotesList(newNotes)
    setFoldersList(newFolders)
  }

  function deleteNote(noteId: string | undefined) {

    const newNotes = notesList.filter((note) => {
      return note.noteId !== noteId
    })

    setNotesList(newNotes)
  }
  

  return (
    <NotesContext.Provider
    value={{
      notesList,
      foldersList,
      addNewNote,
      addNewFolder,
      deleteFolder,
      deleteNote,
      editNote
    }}
    >
      {children}
    </NotesContext.Provider>
  )


}