import React, { useState } from 'react';
import {Avatar, Button, Grid, Paper, TextField, Typography} from '@material-ui/core';
import { Link, useNavigate} from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';


function Login() {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    email : "",
    password : ""
  })

  const handleLogin = (e) =>{
  e.preventDefault();
  const loggeduser = JSON.parse(localStorage.getItem("user"));
  if(
    input.email === loggeduser.email &&
    input.password === loggeduser.password
  ){
    localStorage.getItem("loggedIn",true)
    navigate('/')
  }else{
    alert("Please Enter correct email or password !")
  }
}

const handleClickShowPassword = () => {
  setInput({ ...input, showPassword : !input.showPassword });
};
 

  const paperStyle = {padding:'50px 40px', width:'400px', margin:'60px auto'}
  const headerStyle = {margin:'0'}
  const textStyle = {marginBottom:"20px"}
  const butnStyle = {alignSelf:"center", backgroundColor:"green", color:"white"}

  return (
    <>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align='center'>
            <Avatar style={{color:"black", backgroundColor:"green"}}/>
            <h2 style={headerStyle}>Login</h2>
            <Typography>Please Login here</Typography>
          </Grid>
          <form style={{marginTop:"20px"}} onSubmit={handleLogin}>
            <TextField label='Email Id' 
                       variant='outlined'
                       placeholder='Enter your Email' 
                       fullWidth style={textStyle} 
                       name="email"
                       value={input.email} 
                       onChange={ (e) => setInput({...input,[e.target.name] : e.target.value})}/>

            <TextField label="Password"
                       variant='outlined'
                       name='password'
                       style={textStyle}
                       placeholder='Password'
                       type={input.showPassword ? "text" : "password"}
                       value={input.password}
                       onChange={ (e) => setInput({...input,[e.target.name] : e.target.value})}
                       InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              >
                              {input.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                          fullWidth
            />

            <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
            <Button type='submit' 
            variant="contained" 
            style={butnStyle}>Login</Button>
            <Typography style={{marginTop:"10px"}}>Don't have an Acoount! | <Link to="/register">Register</Link></Typography>
            </div>
        </form>
        </Paper>
      </Grid>
    </>
  )
}

export default Login
