import styled from "styled-components";
export const AppContainer = styled.div`
  width: 1000px;
  height: 700px;
  background-color: ${props => props.theme.white};
  border-radius: 20px;
  margin: 100px auto;
  padding: 20px;
  border: 2px solid gray;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 3fr;

  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

`

export const ButtonConfig = styled.button`
  padding: 1rem;
  border-radius: 10px;
  border: none;
  outline: none;
  width: 100%;
  background-color: ${props => props.theme.white};
  text-align: left;
  font-size: 1rem;
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    background-color: ${props => props.theme["gray-100"]};
  }
`



