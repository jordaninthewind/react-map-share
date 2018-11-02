import React, { Component } from 'react';
import MapContainer from './MapContainer'
import './App.css';
require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-navbar">
        Future<br/>Home<br/>of a<br/>Navbar
        </div>
        <header className="App-map">
          <MapContainer />
        </header>
      </div>
    );
  }
}

export default App;

// add redux for navbar connectivity and make searchable/selectable for qualities