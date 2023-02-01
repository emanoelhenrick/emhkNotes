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
  justify-content: space-between;

  &:hover {
    button:last-child {
      opacity: 1;
    }
  }

  button:last-child {
    opacity: 0;
    align-self: flex-end;
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
    width: 24;
    height: 24px;
    color: gray;
    transition: all 100ms;

    &:hover {
      color: red;
    }
  }

  button:first-child {
    position: absolute;
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
    width: 24;
    height: 24px;

    &:hover {
      color: red;
    }
  }

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

  a{
    text-decoration: none;
  }
  
`

export const DivContainer = styled.div`
  position: relative;
  transition: transform 100ms;

  &:hover {
    transform: scale(1.05,1.05);

    button:last-child {
      opacity: 1;
    }
  
  }

  button:last-child {
    opacity: 0;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    border: none;
    background: none;
    width: fit-content;
    cursor: pointer;
    transition: all 100ms;
    color: gray;

    &:hover {
      color: red;
    }
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
  position: relative;

  span {
    opacity: 0;
    position: absolute;
    font-size: 0.8rem;
    bottom: 12px;
    transition: all 200ms;
    color: gray;

  }

  &:hover {
    background: #E1e1e2;
    transform: scale(1.05, 1.05);

    span {
      opacity: 1;
    }
  }
`

export const NoFolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1{
    font-weight: 400;
  }
`