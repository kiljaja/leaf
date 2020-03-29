import React from "react";
import style from "./RegisterForm.css";
import logo from './logo 3.png'; // with import

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: this.state.phone,
        password: this.state.password
      })
  };
  fetch('https://brooklyn-hackathon.herokuapp.com/api/createUser', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="register-form">

      <p class = "title"> Register </p>

        <input class = "phoneField input-field"
          name="phone"
          type="text"
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="Phone"
        />
        <input class = "passwordField input-field"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
        />

        <input class = "loginButton submit-btn" type="submit" value="Sign up" />
        <img src={logo} class = "logo3" />

        <p class = "registerlink"> Create an account here </p>
      </form>
    );
  }
}

export default RegisterForm;
