import styled from "styled-components";

export const FoldersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 25rem;
  padding: 0.5rem;

  overflow-y: scroll;
  overflow-x: auto;

  a {
    width: 100%;
    text-decoration: none;
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
  background-color: ${props => props.theme["gray-100"]};
  text-align: left;
  font-size: 1rem;
  transition: all 100ms;
  cursor: auto;
  animation: fade-in-folder 0.2s;

  @keyframes fade-in-folder {
    0% {
      padding: 0px 1rem;
      font-size: 0px;
    }
  }

  }
`


export const FolderContainer = styled.button`
  padding: 1rem;
  border-radius: 10px;
  border: none;
  outline: none;
  width: 100%;
  background-color: ${props => props.theme.white};
  text-align: left;
  font-size: 1rem;
  transition: all 100ms;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    transform: scale(1.05, 1.05);
    background-color: ${props => props.theme["gray-100"]};
  }
`

export const CurrentFolder = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${props => props.theme["gray-700"]};
  border-radius: 99px;
  float: right;
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
    color: ${props => props.theme["purple-500"]};
  }
`