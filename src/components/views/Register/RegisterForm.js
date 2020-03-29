import React from "react";
import style from "./RegisterForm.css";

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
        <input
          name="phone"
          type="text"
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="Phone"
        />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder = "Password"
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default RegisterForm;
