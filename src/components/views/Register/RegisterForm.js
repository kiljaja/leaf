import React from "react";
import "./RegisterForm.css";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      zipcode: "",
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
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: this.state.phone.replace(/-/g,""),
        password: this.state.password,
        zipcode: this.state.zipcode
      })
  };
  console.log(requestOptions);
  fetch('https://brooklyn-hackathon.herokuapp.com/api/createUser', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="register-form">
        <input className = "input-field"
          name="phone"
          type="text"
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="Phone"
        />
        <input className = "input-field"
          name="zipcode"
          type="number"
          value={this.state.zipcode}
          onChange={this.handleChange}
          maxLength="5"
          placeholder="zipcode"
        />
        <input className = "input-field"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <input className = "submit-btn" type="submit" value="Sign up" />
      </form>
    );
  }
}

export default RegisterForm;
