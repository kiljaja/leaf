import React from "react";
import style from "./DonateForm.css";

class DonateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDescription: "pizza",
      address: "20 W 34th St, New York, NY 10001",
      itemType: "food"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.testingToken = this.testingToken.bind(this);
  }

  componentDidMount() {
    this.testingToken();
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  testingToken() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: "347-484-1636",
        password: "testpasswordtest"
      })
    };
    fetch(
      "https://brooklyn-hackathon.herokuapp.com/api/loginUser",
      requestOptions
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ token: data.token });
        console.log(data);
        console.log(this.state.token);
      });
  }

  handleSubmit(event) {
    const requestOptions = {
      method: "POST",
      headers: {
        'Authorization': this.state.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        address: "20 W 34th St, New York, NY 10001",
        itemToDonate: { itemType: this.state.category, itemDescription: this.state.itemDescription }
      })
    };

    fetch(
      "https://brooklyn-hackathon.herokuapp.com/api/userAddItem",
      requestOptions
    )
      .then(response => response.json())
      .then(data => console.log("Success added a new item"));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="donate-form">
        <textarea
          className="text-field"
          name="message"
          type="text"
          value={this.state.itemDescription}
          onChange={this.handleChange}
          placeholder="Describe your item"
        />
        <input
          className="input-field"
          name="address"
          type="text"
          value={this.state.address}
          onChange={this.handleChange}
          placeholder="address"
        />
        <select
          className="select-list"
          name="category"
          value={this.state.itemType}
          onChange={this.handleChange}
        >
          <option value="food">food</option>
          <option value="clothing">clothing</option>
          <option value="other">other</option>
        </select>

        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    );
  }
}

export default DonateForm;
