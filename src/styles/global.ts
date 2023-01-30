import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, input, button, textarea {
    font-family: 'Raleway', sans-serif;
  }

  body {
    background: #fff;
    height: 100vh;
  }
`