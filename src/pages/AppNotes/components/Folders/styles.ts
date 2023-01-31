import styled from "styled-components";

export const FoldersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  a {
    width: 100%;
  }

  form {
    width: 100%;
  }

  input {
  padding: 1rem;
  border-radius: 10px;
  border: none;
  outline: none;
  width: 100%;
  background-color: #E1e1e2;
  text-align: left;
  font-size: 1rem;
  transition: all 100ms;
  cursor: auto;

  }
`


export const FolderContainer = styled.button`
  padding: 1rem;
  border-radius: 10px;
  border: none;
  outline: none;
  width: 100%;
  background-color: #E1e1e2;
  text-align: left;
  font-size: 1rem;
  transition: all 100ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.05, 1.05);
    background-color: silver;
  }
`


export const ButtonAddFolder = styled.button`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  border: none;
  outline: none;
  background-color: transparent;
  text-align: center;
  font-size: 1rem;
  color: black;
  cursor: pointer;
  transition: all 100ms;

  &:hover {
    color: red;
  }
`