import React from "react";
import "./RegisterForm.css";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      password: "",
      zipcode: ""
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
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: this.state.phone,
        password: this.state.password,
        zipcode: this.state.zipcode
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
        <input class = "phoneField input-field"
          name="phone"
          type="text"
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="Phone"
        />
        <input class = "input-field"
          name="zipcode"
          type="number"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <input class = "passwordField input-field"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <input class = "loginButton submit-btn" type="submit" value="Sign up" />
      </form>
    );
  }
}

export default RegisterForm;
