import React from "react";
import RegisterForm  from "./RegisterForm";

function Register () {
  return <div>
    <p class = "title"> Register </p>

    <RegisterForm />

    <p class = "loginlink"> You have an account? <b>Log-in</b> </p>
   </div>;
}

export default Register;
