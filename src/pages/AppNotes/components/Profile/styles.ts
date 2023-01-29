import styled from "styled-components";

export const ProfileContainer = styled.div`
  /* padding: 1rem; */
  background-color: #E1e1e2;
  width: 100%;
  height: 10rem;
  border-radius: 10px;
  color: black;
  margin-bottom: 1rem;
  display: flex;
  position: relative;
  overflow: hidden;
  z-index: 0;

  span {
    margin-left: 1rem;
    font-weight: bold;
    display: inline-block;
    align-self: flex-end;
    margin-bottom: 1rem;
    z-index: 1;
  }

  div {
    width: 100%;
    background-color: silver;
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