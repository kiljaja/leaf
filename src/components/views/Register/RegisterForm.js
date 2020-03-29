import React from "react";
import style from "./RegisterForm.css";
import logo from './logo1.png'; // with import

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  handleSubmit(event) {
    alert("A name was submitted: ");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

      <p class = "title"> Leaf </p>

        <input class = "phoneField"
          name="phone"
          type="text"
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="Phone"
        />
        <input class = "passwordField"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder = "Password"
        />

        <input class = "loginButton" type="submit" value="Submit" />
        <img src={logo} class = "logo1" />

        <p class = "registerlink"> Create an account here </p>
      </form>
    );
  }
}

export default RegisterForm;
