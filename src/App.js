import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import NavBar from './Components/NavBar/NavBar'

class App extends Component {
  state = {
    loggedIn: false
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedIn 
        ? <Router>
            <div>
              <NavBar />
            </div>
          </Router>
        : <h1>Please Log In</h1>
      }
        
      </div>
    );
  }
}
export default App;
