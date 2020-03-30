import React from "react";
import style from "./LoginForm.css";

class LoginForm extends React.Component {
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
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: this.state.phone.replace(/-/g,""),
        password: this.state.password
      })
  };
  fetch('https://brooklyn-hackathon.herokuapp.com/api/loginUser', requestOptions)
      .then(response => response.json())
      .then(data => {
        if(data.token != null){
          this.props.handleLogin(data.token);
        } else{
          this.setState({phone:data.message})
        }
        
        console.log(data)});

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="LoginForm">
        <input
          name="phone"
          className="input-field"
          type="text"
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="Phone"
        />
        <input
          className="input-field"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <input className="submit-btn" type="submit" value="Login" />
      </form>
    );
  }
}

export default LoginForm;
