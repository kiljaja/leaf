import React from "react";
import LoginForm from "./LoginForm";
import "./Login.css";
import logo1 from "../../../assets/logo1-1.png";

function Login() {
  return (
    <div className="login">
      <h1 className="title">Leaf</h1>
      <LoginForm />
      <div className="login-logo-container">
        <img src={logo1} alt="logo"/>
      </div>
    </div>
  );
}

export default Login;
