import React from "react";
import RegisterForm from "./RegisterForm";
import "./Register.css";
import logo from "../../../assets/logo1-3.png";

function Register() {
  return (
    <div className="register">
      <h1 className="title"> Register </h1>
      <RegisterForm />
      <div className="register-logo-container">
        <img src={logo} alt="logo" />
      </div>

      <p className="prompt-login-user">
        You have an account? <b>Log-in</b>
      </p>
    </div>
  );
}

export default Register;
