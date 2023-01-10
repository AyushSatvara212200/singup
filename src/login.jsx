import React, { useState } from "react";
import styled from "styled-components";
import image from "./Images/hand-painted.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import Home from './homepage'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30%;
 height: 60%;
  background-color: whitesmoke;
  box-shadow: 0px 0px 18px 4px rgba(0, 0, 0, 0.44);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const SignContainer = styled.div`
  width: 100%;
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const StyledTextfield = styled(TextField)`
  width: 70%;
`;
const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  font-family: "Urbanist", sans-serif;
`;
const StyledButton = styled(Button)`
  width: 30%;
  font-family: "Urbanist", sans-serif !important;
  font-weight: bold !important;
`;
const SimpleText = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 300;
`;


export const Login = () => {

  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPass = () => {
    if (showPassword) {
      setShowPassword(false)
    } else {
      setShowPassword(true)
    }
  }

  const login = ()=>{
    axios.post("http://localhost:3002/login",user)
    .then(res=>{
      alert(res.data.message);
    })
  }
  return (
    <>
    
      <Container>
        <Wrapper>
          <SignContainer >Log In</SignContainer>
          {console.log(user)}
          <InputContainer>
            <StyledTextfield
              id="outlined-basic"
              type="text"
              label="Username"
              variant="outlined"
              size="small"
              name="username"
              value={user.username}
              onChange={handleChange}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <AccountCircleIcon/>
                </InputAdornment>,
              }}
            />
            <StyledTextfield
              id="outlined-basic"
              type={showPassword?"text":"password"}
              label="Password"
              variant="outlined"
              size="small"
              autoComplete="current-password"
              name="password"
              value={user.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  {showPassword ? <VisibilityIcon onClick={handleShowPass} style={{ cursor: "pointer" }} /> : <VisibilityOffIcon onClick={handleShowPass} style={{ cursor: "pointer" }} />}
                </InputAdornment>,
              }}
            />
          </InputContainer>
          <ButtonContainer>
            <StyledButton variant="contained" onClick={login}>Submit</StyledButton>
          </ButtonContainer>
          <SimpleText>
            Don't have an account?&nbsp;
            <NavLink
              to="/signup"
              style={{ textDecoration: "none", color: "blue" }}>
              Sign Up
            </NavLink>
          </SimpleText>
        </Wrapper>
      </Container>
    </>
  );
}

export default Login;


