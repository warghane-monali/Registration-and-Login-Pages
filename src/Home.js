import React from 'react';
import {Button, Divider, Grid, Toolbar, Typography} from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()

  const imgStyle = {borderRadius:"120px",height:"70px", margin:"5px"}
  const typoStyle = {color:"white"}
  const btnStyle = {marginTop:"20px",color:"white", backgroundColor:"green"}

  return (
    <>
      <Grid container justifyContent='center'>
      <div style={{width:'100vw',height:'100vh',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <h1 style={{color:'whitesmoke'}}>Welcome To Home Page</h1>
        <Button variant="contained" style={btnStyle} onClick={() =>navigate("/register")}>Registration</Button>
        <Button variant="contained" style={btnStyle} onClick={() =>navigate("/login")}>Login</Button>
      </div>
      </Grid>
      
    </>
  )
}

export default Home
