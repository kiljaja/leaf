import React from "react";
import DonateForm from "./DonateForm";
import "./Donate.css";

function Donate(props) {
  return (
    <div className="donate">
      <button className="back-arrow" onClick={props.handleGoingBack}>↩</button>
      <h1 className="title">Donate</h1>
      <DonateForm token={props.token} />
    </div>
  );
}

export default Donate;
