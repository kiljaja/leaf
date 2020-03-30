import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Register from './components/views/Register/Register';
import Login from './components/views/Login/Login';
import Choose from './components/views/Choose/Choose';
import Donate from './components/views/Donate/Donate';
// import Map from './components/views/Map/Map';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      token: "",
      isLoggedIn: false,
      needsToCreateUser: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    // this.handleCreateUser = this.this.handleCreateUser.bind(this);
  }

  handleLogin(token){
    this.setState({token, isLoggedIn: true})
  }

  handleCreateUser(){
    this.setState({needsToCreateUser: true})
  }

  render(){
    return (
      <div className="app">
      {this.state.isLoggedIn ? (
        <Choose token={this.state.token}/>
      ): (
        <Login handleLogin={this.handleLogin}/>
        
      )}
        
        {/* <Map /> */}
      </div>
    );
  }
  
}

export default App;
