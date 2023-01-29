import styled from "styled-components";

export const NoteContainer = styled.div`
  height: 100px;
  background: #E1e1e2;
  padding: 1rem;
  border-radius: 10px;
  transition: all 200ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.05, 1.05);
  }
`

export const AddNote = styled.div`
  height: 100px;
  
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    background: #E1e1e2;
    transform: scale(1.05, 1.05)
  }
`