import React, { useState } from 'react';
import {Avatar, Button, Grid, Paper, TextField, Typography} from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import FormValidation from './FormValidation';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';


function Registeration() {  
const navigate = useNavigate()
const [input, setInput] = useState({
  firstname : "",
  lastname : "",
  email : "",
  password : "",
  confirm_password : "",
  phone_number : "",
  showPassword : false,
  showConfirmPassword : false
})

const [errors, setErrors] = useState({})

const validate = () => {
  if(Object.keys(errors).length === 0 && (!input.firstname == "" && !input.lastname == "" && !input.email == "" && !input.password == "" && !input.confirm_password == "" && !input.phone_number == "")){
    return true;
  }
  return false
}

const handleSubmit = (e) =>{
 e.preventDefault();
 if(validate())
{ localStorage.setItem("user", JSON.stringify(input));
alert("Registered Successfully")
    navigate("/login")}
 else setErrors(FormValidation(input))
}

const handleClickShowPassword = () => {
  setInput({ ...input, showPassword : !input.showPassword });
};

const handleClickShowConfirm = () =>{
  setInput({ ...input, showConfirmPassword : !input.showConfirmPassword} );
};

const paperStyle = {padding:'40px 40px', width:'500px', margin:'40px auto'}
const headerStyle = {margin:'5px'}
const textStyle = {marginBottom:"15px"}
const butnStyle = {alignSelf:"center", backgroundColor:"green", color:"white"}

return (
    <>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align='center'>
            <Avatar style={{color:"black", backgroundColor:"green"}}/>
            <h2 style={headerStyle}>Registration</h2>
            <Typography>Create your Account here</Typography>
          </Grid>
          <form style={{marginTop:"20px"}} onSubmit={handleSubmit}>
          <div>
          <TextField label='First Name'
                       variant='outlined'
                       placeholder='Enter Your First Name' 
                       fullWidth
                       style={textStyle}
                       name="firstname" 
                       value={input.firstname} 
                       onChange={ (e) => setInput({...input,[e.target.name] : e.target.value})}/>
          {errors.firstname && <p style={{color:"red", marginBottom:"20px"}} >{errors.firstname}</p>}
            </div>

            <TextField label='Last Name'
                       variant='outlined' 
                       placeholder='Enter Your Last Name' 
                       fullWidth style={textStyle} 
                       name="lastname" 
                       value={input.lastname} 
                       onChange={ (e) => setInput({...input,[e.target.name] : e.target.value})}/>
            {errors.lastname && <p style={{color:"red",marginBottom:"20px"}}>{errors.lastname}</p>}

            <TextField label='Email' 
                       variant='outlined' 
                       placeholder='Enter Your Email' 
                       style={textStyle} 
                       fullWidth 
                       name='email' 
                       value={input.email} 
                       onChange={ (e) => setInput({...input,[e.target.name] : e.target.value})}/>
                       {errors.email && <p style={{color:"red",marginBottom:"20px"}}>{errors.email}</p>}
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
                       {errors.password && <p style={{color:"red",marginBottom:"20px"}}>{errors.password}</p>}

            <TextField  label=" Confirm Password"
                        variant='outlined'
                        name='confirm_password'
                        style={textStyle}
                        placeholder='Confirm Password'
                        type={input.showConfirmPassword ? "text" : "password"}
                        value={input.confirm_password}
                        onChange={ (e) => setInput({...input,[e.target.name] : e.target.value})}
                        InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowConfirm}
                              >
                              {input.showConfirmPassword ? (
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
                        {errors.confirm_password && <p style={{color:"red",marginBottom:"20px"}}>{errors.confirm_password}</p>}
                      

            <TextField label='Phone Number' 
                       variant='outlined' 
                       placeholder='Phone Number' 
                       style={textStyle} 
                       fullWidth 
                       name='phone_number' 
                       value={input.phone_number} 
                       onChange={ (e) => setInput({...input,[e.target.name] : e.target.value})}/>
                       {errors.phone_number && <p style={{color:"red",marginBottom:"20px"}}>{errors.phone_number}</p>}
              
            <div style= {{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
            <Button type='submit' 
                    variant="contained" 
                    style={butnStyle}>Register</Button>
            <Typography style={{marginTop:"10px"}}>Already registered! | <Link to="/login">Login</Link></Typography>
            </div>
          </form>
        </Paper>
      </Grid>
    </>
  )
}

export default Registeration
