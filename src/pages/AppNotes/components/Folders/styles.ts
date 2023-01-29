import styled from "styled-components";

export const FoldersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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