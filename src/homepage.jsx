import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import image from "./Images/stairs.png";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import helpImage from "./Images/helpinghand.png";

const Conatiner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${image});
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const WrapperImage = styled.div`
  width: 45%;
  height: 50%;
`;
const Wrapper = styled.div`
  width: 50%;
  height: 50%;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #b6d7ff1f;
  backdrop-filter: blur(15px);
  border-radius: 20px;
  gap: 25px;
  font-family: "Maven Pro", sans-serif I !important;
`;
const StyledButton = styled(AwesomeButton)`
  width: 200px;
  height: 60px;
  font-family: "Urbanist", sans-serif !important;
  font-weight: 800 !important;
  font-size: 20px !important;
  -button-primary-color: #002347;
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Headingtag = styled.h1`
  background-image: linear-gradient(60deg,  #630036,#060080);
  -webkit-background-clip: text;
  color: transparent;
`;
const homepage = () => {
  return (
    <>
      <Conatiner>
        <WrapperImage>
          <img
            src={helpImage}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </WrapperImage>
        <Wrapper>
          <Headingtag>Welcome to Community Help Space</Headingtag>
          <StyledContainer>
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <StyledButton type="primary">Log In</StyledButton>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/signup">
              <StyledButton type="primary">Sign Up</StyledButton>
            </NavLink>
          </StyledContainer>
        </Wrapper>
      </Conatiner>
    </>
  );
};

export default homepage;
