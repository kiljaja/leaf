import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Register from './components/views/Register/Register';
import Login from './components/views/Login/Login';
import Donate from './components/views/Donate/Donate';

function App() {
  return (

    <div className="app">
      <Login />
      {/* <Donate /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
