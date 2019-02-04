import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApplicationViews from './ApplicationViews'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApplicationViews />
      </div>
    );
  }
}

export default App;
