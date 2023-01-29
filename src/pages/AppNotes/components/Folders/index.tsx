import { ButtonAddFolder, FoldersContainer } from "./styles";
import { Plus } from 'phosphor-react'
import { Folder } from "../Folder";

const folderArray = [
  {
    title: 'Primeira Pasta',
    folderId: 'gj4k34g'
  },
  {
    title: 'Segunda Pasta',
    folderId: 'gj4k34g'
  },
  {
    title: 'Terceira Pasta',
    folderId: 'gj4k34g'
  },
]

export function Folders() {
  return (
    <FoldersContainer>

      {folderArray.map(folder => {
        return <Folder title={folder.title} key={folder.folderId} />
      })}
      <ButtonAddFolder><Plus size={24} /></ButtonAddFolder>

    </FoldersContainer>
  )
}