import { ButtonAddFolder, CurrentFolder, FolderContainer, FoldersContainer } from "./styles";
import { Plus, Trash } from 'phosphor-react'
import { useContext, useState } from "react";
import { NotesContext } from "../../context";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";

function generateID() {
  let array = new Uint32Array(4);
  window.crypto.getRandomValues(array);
  let str = "";
  for (let i = 0; i < array.length; i++) {
    str += array[i].toString(16);
  }
  return str;
}

export function Folders() {

  const { foldersList, addNewFolder } = useContext(NotesContext)
  const { register, handleSubmit, reset } = useForm()
  const [ progressNewFolder, setProgressNewFolder ] = useState(false)

  const { folderId } = useParams()

  interface folderPropForm {
    folderTitle: string
  }

  const navigate = useNavigate()


  function submitNewFolder(data: folderPropForm) {

    const newId = generateID()

    const newFolder = {
      folderTitle: data.folderTitle,
      folderId: newId
    }
    
    addNewFolder(newFolder)
    setProgressNewFolder(false)
    reset()
    navigate(`/app/${newFolder.folderId}`)
  }

  function renderInputFolder() {
    if(progressNewFolder){
      return (
        <input
          type="text"
          autoFocus
          placeholder="Titulo"
          {...register('folderTitle')}
        />
      )
    }
  }

  function changeNewFolderProgress() {
    if(!progressNewFolder){
      setProgressNewFolder(true)
    } else {
      setProgressNewFolder(false)
    }
  }

  return (
    <FoldersContainer>

      {foldersList.map(folder => {
        return (
          <NavLink
            to={`/app/${folder.folderId}`}
            key={folder.folderId}
            >

            <FolderContainer>
            <span>
              {folder.folderTitle}
            </span>
            { folderId === folder.folderId && <CurrentFolder /> }
            </FolderContainer>
          </NavLink>
          
        ) 
      })}

      <form onSubmit={handleSubmit(submitNewFolder as any)}>
        {renderInputFolder()}
      </form>

      <ButtonAddFolder onClick={changeNewFolderProgress} >
        <Plus size={24} />
      </ButtonAddFolder>

    </FoldersContainer>
  )
}