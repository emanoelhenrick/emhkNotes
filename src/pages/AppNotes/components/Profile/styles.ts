import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: ${props => props.theme["gray-300"]};
  width: 100%;
  height: 10rem;
  border-radius: 10px;
  background-image: url(https://images.unsplash.com/photo-1517174637803-6929e01b6e63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  color: black;
  margin-bottom: 1rem;
  display: flex;
  position: relative;
  overflow: hidden;
  z-index: 0;

  span {
    margin-left: 1rem;
    color: ${props => props.theme.white};
    font-weight: bold;
    display: inline-block;
    align-self: flex-end;
    margin-bottom: 1rem;
    z-index: 1;
  }

  div {
    width: 100%;
    background-color: ${props => props.theme["gray-900"]};
    height: 3rem;
    position: absolute;
    bottom: 0;
    z-index: 0;
  }
`

export const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 10px;
  display: block;
  align-self: flex-end;
  z-index: 1;
  margin-left: 1rem;
  margin-bottom: 1rem;
`