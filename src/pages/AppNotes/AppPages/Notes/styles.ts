import styled from "styled-components";
import { LoginPage } from "../../../Login";

export const NotesContainer = styled.div`
  border-radius: 10px;
  display: grid;
  gap: 1rem;
  grid-template-rows: 10rem 1fr;
`

export const EditTitle = styled.input`
  font-size: 3rem;
  font-weight: bold;
  height: 4rem;
  position: absolute;
  background: none;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  bottom: 0.7rem;
`

export const FolderName = styled.div`
  height: 10rem;
  background-color: ${props => props.theme.white};
  border-radius: 10px;
  margin-bottom: 1rem;
  color: ${props => props.theme["gray-800"]};
  padding: 1rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  position: relative;

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
      color: ${props => props.theme["red-500"]};
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
    top: 12px;
    transition: all 200ms;
    color: ${props => props.theme["gray-700"]};

  }

  &:hover {
    background: ${props => props.theme["gray-100"]};
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