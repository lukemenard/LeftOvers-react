import React, { Component } from 'react';
import './App.css';

import Home from './Components/Home/Home'
import Login from './Components/Login/Login'


class App extends Component {
  state = {
    loggedIn: false,
    foods: []
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.fetchFoods()
    }
  }

  logIn = () => {
    this.setState({
      loggedIn: true
    })
  }

  fetchFoods = () => {
    this.logIn()
    fetch('http://localhost:3000/foods', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => response.json())
    .then(foods => this.setState({
      foods: foods
    }))
    .catch(error => console.log('Error:', error))
  }

  handleLogIn = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  render() {
    // console.log(this.state.foods)
    return (
      <div className="App">
        {
        this.state.loggedIn
          ? <Home foods={this.state.foods} />
          : <Login fetchFoods={this.fetchFoods} />
        }
        
      </div>
    );
  }
}
export default App;
