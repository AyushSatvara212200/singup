import React from 'react'
import Button  from '@mui/material/Button'
import { NavLink } from 'react-router-dom'

const homepage = () => {
  return (
    <>
    <h1>Welcome to HomePage</h1>
        <NavLink style={{textDecoration:"none"}} to="/login"><Button variant='contained'>Login</Button></NavLink>
        <NavLink style={{textDecoration:"none"}} to="/signup"><Button variant='contained'>Signup</Button></NavLink>
    </>
  )
}

export default homepage