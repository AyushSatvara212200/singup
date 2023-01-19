import React, { useState } from "react";
import styled from "styled-components";
import image from "./Images/mountaintwo.png";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import axios from 'axios'
import validator from 'validator'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css';

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
  background-color: #ffffffa9;
  backdrop-filter: blur(20px);
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
  font-weight: 600;
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
const StyledButton = styled(AwesomeButton)`
  width: 30%;
  font-family: "Urbanist", sans-serif !important;
  font-weight: bold !important;
  font-size: 15px;
`;
const SimpleText = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 300;
`;



export const Signup = () => {

  //present user model 
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  })

  //Currently for username only
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  //On submit , data will be posted to database
  const submitSignUp = () => {
    const { username, email, password } = user;
    if (username && email && password && validator.isEmail(email) && validator.isStrongPassword(password)) {
      axios.post("http://localhost:3002/signup", user).then(res => {
        alert(res.data.message);
      })
      setUser({
        username: "",
        email: "",
        password: ""
      })
    }
    else {
      alert("Please Correct Details OR User is Already Registered")
    }
  }


  //Email Validation
  const [emailError, setEmailError] = useState('Enter Email')
  const [em, setEm] = useState();
  const validateEmail = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    const email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('Valid Email')
      setEm(false)
      setEmailError('Enter Email')

    } else {
      setEmailError('Enter valid Email !')
      setEm(true)
    }
  }

  //Password Validation
  const [passError, setPassError] = useState("Create Password")
  const [pasEr, setPasEr] = useState()
  const validatePassword = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    const password = e.target.value
    if (validator.isStrongPassword(password)) {
      setPassError('Great !!')
      setPasEr(false)
    } else if (password) {
      setPassError('Enter Strong Password')
      setPasEr(true)
    } else {
      setPasEr(false)
    }
  }
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPass = () => {
    if (showPassword) {
      setShowPassword(false)
    } else {
      setShowPassword(true)
    }
  }
  return (
    <>

      <Container>
        <Wrapper>
          <SignContainer>Sign Up</SignContainer>
          <InputContainer>
            <StyledTextfield
              id="outlined-basic"
              type="text"
              label="New Username"
              size="small"
              name="username"
              value={user.username}
              onChange={handleChange}
              autoComplete="on"
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <AccountCircleIcon />
                </InputAdornment>,
              }}
            />
            <StyledTextfield
              id="outlined-basic"
              type="email"
              label={emailError}
              size="small"
              name="email"
              error={em}
              value={user.email}
              onChange={validateEmail}
              autoComplete="on"
            />
            <StyledTextfield
              id="outlined-basic"
              type={showPassword ? 'text' : 'password'}
              label={passError}
              size="small"
              autoComplete="new-password"
              name="password"
              error={pasEr}
              value={user.password}
              onChange={validatePassword}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  {showPassword ? <VisibilityIcon onClick={handleShowPass} style={{ cursor: "pointer" }} /> : <VisibilityOffIcon onClick={handleShowPass} style={{ cursor: "pointer" }} />}
                </InputAdornment>,
              }}

            />
          </InputContainer>
          <ButtonContainer>
            <StyledButton type="primary" onPress={submitSignUp}>Register</StyledButton>
          </ButtonContainer>
          <SimpleText>
            Already have an account?&nbsp;
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "blue" }}>
              Log In
            </NavLink>
          </SimpleText>
        </Wrapper>
      </Container>
    </>
  );
}

export default Signup;


