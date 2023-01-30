import styled from "styled-components";
export const AppContainer = styled.div`
  width: 1000px;
  height: 700px;
  background-color: #F3F4F5;
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
  background-color: #E1e1e2;
  text-align: left;
  font-size: 1rem;
`



