import styled from "styled-components";

export const ViewerContainer = styled.div`
  height: 100%;
  padding: 1rem;
  position: relative;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background: none;
    color: gray;
    outline: none;
    border: none;
    position: absolute;
    right: 1rem;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    transition: all 200ms;

    span {
      margin-right: 0.5rem;
    }

    &:hover {
      color: black;
      border-bottom: 1px solid black;
    }
  }

  h1{
    margin-bottom: 1rem;
  }
`