import styled from "styled-components";

export const NotesContainer = styled.div`
  border-radius: 10px;
  display: grid;
  gap: 1rem;
  grid-template-rows: 10rem 1fr;
`

export const FolderName = styled.div`
  height: 10rem;
  background-color: #E1e1e2;
  border-radius: 10px;
  margin-bottom: 1rem;
  color: black;
  padding: 1rem;
  font-size: 1.5rem;
  display: flex;

  h1 {
    
    display: inline-block;
    align-self: flex-end;
  }
`

export const NotesList = styled.div`

  width: 100%;
  height: fit-content;
  border-radius: 10px;

  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`

