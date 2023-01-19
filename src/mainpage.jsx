import React from 'react'
import styled from "styled-components";
import { AwesomeButton } from "react-awesome-button";
import { NavLink } from 'react-router-dom';

const Headingtag = styled.h1`
  background-image: linear-gradient(60deg,  #630036,#060080);
  -webkit-background-clip: text;
  color: transparent;
`;
const StyledButton = styled(AwesomeButton)`
  width: 200px;
  height: 60px;
  font-family: "Urbanist", sans-serif !important;
  font-weight: 800 !important;
  font-size: 20px !important;
  -button-primary-color: #002347;
`;

function mainpage() {
  return (
    <>
      <Headingtag>Welcome to the main page After the successfull login</Headingtag>
      <NavLink style={{ textDecoration: "none" }} to="/">
        <StyledButton type="primary">Log Out</StyledButton>
      </NavLink>
    </>
  )
}

export default mainpage