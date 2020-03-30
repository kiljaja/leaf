import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Register from './components/views/Register/Register';
import Login from './components/views/Login/Login';
import Donate from './components/views/Donate/Donate';
// import Map from './components/views/Map/Map';

function App() {
  return (

    <div className="app">
      <Register />
      {/* <Map /> */}
    </div>
  );
}

export default App;
