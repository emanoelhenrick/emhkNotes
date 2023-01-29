import { FolderContainer } from './styles'

export function Folder({ title }: any) {
  return (
    <FolderContainer>
      <span>{title}</span>
    </FolderContainer>
  )
}