import React from 'react';

function FormValidation(input) {
    // const [password, setPassword] = useState("");
    // const [passworderror, setPasswordError] = useState({});
    var passwordExp =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;

    var emailExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var alphaExp = /^[a-zA-Z]+$/;
    let errors = {}

    if(!input.firstname){
        errors.firstname = " * firstname required"
    }else if(input.firstname.length <5){
        errors.firstname = "Firstname must be more than 5 Char"
    }else if (!input.firstname.match(alphaExp)) {
        errors.firstname = "please enter only character";}

    if(!input.lastname){
        errors.lastname = "* lastname required"
    }else if(input.lastname.length <5){
        errors.lastname = "lastname must be more than 5 Char"
    }else if (!input.lastname.match(alphaExp)) {
        errors.lastname = "please enter only character";}

    if(!input.email){
        errors.email = "* email is required"
    }else if (!input.email.match(emailExp)) {
        errors.email = "Invalid email address";
    }

    if(!input.password){
        errors.password = "* password is required"
    }else if (!input.password.match(passwordExp)){
        errors.password = "password must contain characters, numeric digits, underscore and first character must be a letter"
    }

    if(!input.confirm_password){
        errors.confirm_password = "* confirm password is required"
    }else if (!input.confirm_password.match(passwordExp)){
        errors.confirm_password = "password must contain characters, numeric digits, underscore and first character must be a letter"
    }else if (input.confirm_password === input.password){
        errors.confirm_password = "password matched"
    }else{
        errors.confirm_password = "Password not matched"
    }

    if(!input.phone_number){
        errors.phone_number = "* Phone number required"
    }else if(input.phone_number.length < 10){
        errors.phone_number = "Phone Number must be 10 digits"
    }else if(input.phone_number.length > 10){
        errors.phone_number = "Phone Number must be 10 digits"
    }
    
    return errors;
}
export default FormValidation;
