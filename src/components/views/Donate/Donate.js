import React from "react";
import DonateForm from "./DonateForm";
import "./Donate.css";

function Donate(props) {
  return (
    <div className="donate">
      <h1 className="title">Donate</h1>
      <DonateForm token={props.token} />
    </div>
  );
}

export default Donate;
