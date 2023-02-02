import styled from "styled-components";

export const NoteContainer = styled.button`
  width: 150px;
  word-wrap: break-word;
  overflow: hidden;
  text-align: left;
  height: 100px;
  background-color: ${props => props.theme["gray-100"]};
  padding: 1rem;
  border-radius: 10px;
  transition: all 200ms;
  border: none;
  outline: none;
  font-size: 1rem;
  display: flex;
  cursor: pointer;
  animation: fade-in-note 300ms;
  animation: ${props => props.isDeleted && 'fade-out-note 200ms'};

  @keyframes fade-in-note {
    0% {
      opacity: 0.5;
      transform: scale(0.8,0.8);
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out-note {
    0% {
      
    }
    100% {
      width: 0px;
      padding: 1rem 0;
      opacity: 0;
      /* overflow: hidden; */
    }
  }

`
