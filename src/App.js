import React, { Component } from 'react';
import './App.css';
import ApplicationViews from './ApplicationViews'
import NavBar from './components/NavBar'

class App extends Component {
  isAuthenticated = () => sessionStorage.getItem("email") !== null

  showNav = () => {
    if (this.isAuthenticated()) {
      return <NavBar />
    }
  }
  render() {
    
    return (
      <div className="App">
        {this.showNav()}
        <ApplicationViews />
      </div>
    );
  }
}

export default App;
