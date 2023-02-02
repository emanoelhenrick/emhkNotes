import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar {
    width: 0.2rem;
    height: 3px;
    border-radius: 99px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    padding: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #000;
  }


  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, input, button, textarea {
    font-family: 'Raleway', sans-serif;
  }

  body {
    background-color: ${props => props.theme["gray-100"]};
    height: 100vh;
    width: 100%;
  }
`