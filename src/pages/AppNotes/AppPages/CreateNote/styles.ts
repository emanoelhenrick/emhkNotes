import styled from "styled-components"

export const NotesContainer = styled.div`
  border-radius: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  height: auto;
  align-items: flex-start;

  form {
    width: 100%;

    a {
      text-decoration: none;
      color: black;
    }
  }
`

export const NoteName = styled.div`
  height: 10rem;
  width: 100%;
  background-color: #E1e1e2;
  border-radius: 10px;
  margin-bottom: 1rem;
  color: black;
  padding: 1rem;
  display: flex;

  input {
    align-self: flex-end;
    font-size: 3rem;
    border: none;
    border-bottom: 2px solid transparent;
    outline: none;
    background: transparent;
    transition: all 200ms;

    &:focus {
      border-bottom: 2px solid gray;
    }
  }
`

export const NoteText = styled.textarea`
  resize: none;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
  font-family: sans-serif;
  border: 2px solid transparent;
  padding: 1rem;
  font-family: 'Raleway', sans-serif;

  transition: all 200ms;

  &:focus {
      border: 2px solid gray;
    }
`

export const ButtonSaveNote = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 10px;
  margin-top: 1rem;
  border: none;
  outline: none;
  background-color: #E1e1e2;
  text-align: left;
  font-size: 1rem;
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    background: silver;
  }
`