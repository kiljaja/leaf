import React from "react";
import style from "./DonateForm.css";

class DonateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDescription: "",
      address: "",
      itemType: "food"
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
      method: "POST",
      headers: {
        Authorization: this.state.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        address: this.state.address,
        itemToDonate: {
          itemType: this.state.category,
          itemDescription: this.state.itemDescription
        }
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
        <div>
          <label className="donate-label"> Description </label>
          <textarea
            className="text-field"
            name="itemDescription"
            type="text"
            value={this.state.itemDescription}
            onChange={this.handleChange}
            placeholder="Describe your item"
          />
        </div>

        <div>
          <label className="donate-label"> Address </label>
          <input
            className="input-field donate-address"
            name="address"
            type="text"
            value={this.state.address}
            onChange={this.handleChange}
            placeholder="Address"
          />
        </div>

        <div className="donate-separator">
          <label className="donate-label"> category </label>
          <select
            className="select-list"
            name="itemType"
            value={this.state.itemType}
            onChange={this.handleChange}
          >
            <option value="food">Food</option>
            <option value="clothing">Clothing</option>
            <option value="other">Other</option>
          </select>
        </div>

        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    );
  }
}

export default DonateForm;
