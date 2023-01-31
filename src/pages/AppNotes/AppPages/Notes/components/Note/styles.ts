import styled from "styled-components";

export const NoteContainer = styled.button`
  width: 150px;
  word-wrap: break-word;
  overflow: hidden;
  text-align: left;
  height: 100px;
  background: #E1e1e2;
  padding: 1rem;
  border-radius: 10px;
  transition: all 200ms;
  border: none;
  outline: none;
  font-size: 1rem;
  display: flex;
  cursor: pointer;

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