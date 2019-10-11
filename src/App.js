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
      loggedIn: !this.state.loggedIn
    })
  }

  logOut = () => {
    localStorage.clear()
    window.location.href = 'http://localhost:3001/'
    this.setState({
      loggedIn: false,
      foods: []
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

  // handleLogIn = () => {
  //   this.setState({
  //     loggedIn: !this.state.loggedIn
  //   })
  // }

  addFood = (food) => {
    const body = {...food}
    const newState = [...this.state.foods, food]
    let url = 'http://localhost:3000/foods'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(body)
    })
    .then(this.setState({
      foods: newState
    }))
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.log('Error:', error))
  }

  deleteFood = (id) => {
    const body = {id}
    const newState = this.state.foods.filter(food => food.id !== id)
    let url = `http://localhost:3000/foods/${id}`
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(body)
    })
    .catch(error => console.log(error))
    .then(this.setState({
      foods: newState
    }))
  }

  updateFood = (food) => {
    const body = {...food}
    const newState = this.state.foods.filter(f => f.id !== food.id)
    let url = `http://localhost:3000/foods/${food.id}`
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(body)
    })
    .catch(error => console.error('Error:', error))
    .then(this.setState({
      foods: [...newState, food]
    }))
  }

  render() {
    return (
      <div className="App">
        {
        this.state.loggedIn
          ? <Home logOut={this.logOut} foods={this.state.foods} addFood={this.addFood} deleteFood={this.deleteFood} updateFood={this.updateFood} />
          : <Login fetchFoods={this.fetchFoods} />
        }
      </div>
    );
  }
}
export default App;
