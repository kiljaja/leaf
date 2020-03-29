import React from "react";
import style from "./DonateForm.css";

class DonateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      address: "",
      category:""
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
  fetch('https://brooklyn-hackathon.herokuapp.com/api/loginUser', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea 
          name="message"
          type="text"
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="Message"
        > </textarea>
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default DonateForm;
