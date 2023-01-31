import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    color: #03001C;
  }

  input {
    padding: 1rem;
    width: 100%;
    border-radius: 8px;
    border: none;
    background-color: #D8D8D8;
    outline: 2px solid transparent;
    transition: all 200ms;
    font-size: 1rem;

    &:focus {
      outline: 2px solid #5B8FB9;
    }
  }

  button {
    padding: 1rem;
    border-radius: 8px;
    border: none;
    outline: none;
    background: #5B8FB9;
    color: white;
    transition: all 100ms;
    cursor: pointer;

    &:hover {
      background: #301E67;
    }
  }

  a {
    text-decoration: none;
    margin-top: 1rem;
    color: #5B8FB9;
    transition: all 100ms;

    &:hover {
      color: #03001C; 
    }
  }

`