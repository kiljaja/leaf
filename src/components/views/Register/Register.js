import React from "react";
import RegisterForm  from "./RegisterForm";
import logo from "../../../assets/logo1-3.png";

function Register () {
  return (<div>
    <h1 class = "title"> Register </h1>
    <RegisterForm />
    {/* <img src={logo} alt=""/> */}
    <p class = "loginlink"> You have an account? <b>Log-in</b> </p>
   </div>);
}

export default Register;
