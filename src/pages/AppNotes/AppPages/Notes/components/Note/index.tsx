import { NoteContainer } from "./styles";

interface NoteProps {
  title: string
  content?: string
  userId?: string
  folderId?: string
  id?: string
}

export function Note({ title, content }: NoteProps) {
  return (
    <NoteContainer>
      { title ? title : content}
    </NoteContainer>
  )
}