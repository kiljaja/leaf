import React from "react";
import Donate from "../Donate/Donate";
import Map from "../Map/Map";
import "./Choose.css";
import logo2 from "../../../assets/logo1-2.png";

class Choose extends React.Component  {
  constructor(props){
    super(props)
    this.state ={
      isDonating: false,
      isReceiving: false
    }
    this.handleDonate = this.handleDonate.bind(this);
    this.handleReceive = this.handleReceive.bind(this);
    this.handleGoingBack = this.handleGoingBack.bind(this);
  }

  handleDonate(){
    this.setState({isDonating: true})
  }
  handleReceive(){
    this.setState({isReceiving: true})
  }

  handleGoingBack(){
    this.setState({isDonating: false, isReceiving: false})
  }
  render(){

    if(!this.state.isDonating && !this.state.isReceiving){
      return (
        <div className="choose">
          <h1 className="title">Choose</h1>
          <button className="submit-btn choose-btn" onClick={this.handleDonate}> Donate </button>
          <button className="submit-btn choose-btn" onClick={this.handleReceive} > Receive </button>
          <div className="choose-logo-container"> 
            <img src={logo2} alt="Logo"/>
          </div>
        </div>
      );
    } else{

      if(this.state.isDonating)
        return <Donate token={this.props.token} handleGoingBack={this.handleGoingBack}/>;
      else
        return <Map />;

    }
    
  }
  
}

export default Choose;
