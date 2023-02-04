import { createContext, useState, useEffect } from "react";
import { api } from "../../../lib/axios";


interface NotesContextProps {
  notesList: NoteProps[]
  foldersList: FolderProps[]
  addNewNote: (note: NoteProps) => void
  addNewFolder: (folder: FolderProps) => void
  deleteFolder: (folderId: string | undefined) => void
  deleteNote: (noteId: string | undefined) => void
  editNote: (data: NoteProps) => void
  editFolder: (data: FolderProps) => void
}

interface NoteProps {
  noteTitle: string
  noteContent: string
  noteId: string
  id: string
  folderId: string
  userId: string
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

  async function fetchUserData(userId: string) {
    const foldersResponse = await api.get(`/folders?userId=${userId}`)
    const foldersListFromJS = foldersResponse.data

    const notesResponse = await api.get(`/notes?userId=${userId}`)
    const notesListFromJS = notesResponse.data


    setNotesList(notesListFromJS)
    setFoldersList(foldersListFromJS)
  }


  useEffect(() => {
    fetchUserData('manel1234')
  }, [])

  function addNewNote(props: newNoteProps) {

    const NEW_ID = generateID()
    
    const newNote = {
      noteContent: props.noteContent,
      noteTitle: props.noteTitle,
      noteId: NEW_ID,
      id: NEW_ID,
      userId: 'manel1234',
      folderId: props.folderId
    }

    api.post('/notes', newNote)
    
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


  function addNewFolder({folderId, folderTitle}:any) {
    const folder = {id: folderId, folderId, folderTitle, userId: "manel1234"}

    api.post('/folders', folder)
    
    setFoldersList(prevFolders => {
      return [...prevFolders, folder]
    })
  }

  function editFolder(data: FolderProps){
    const newFoldersList = foldersList.map((folder) => {
      if(folder.folderId === data.folderId){
        folder.folderTitle = data.folderTitle
        return folder
      } else {
        return folder
      }
    })

    setFoldersList(newFoldersList)
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
      editNote,
      editFolder
    }}
    >
      {children}
    </NotesContext.Provider>
  )


}