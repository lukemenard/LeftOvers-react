import React, { Component } from 'react'

export default class CreateUserForm extends Component {
    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, password, firstName, lastName } = this.state
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                    first_name: firstName,
                    last_name: lastName
                }
            })
        })
        .catch(error => console.error('Error:', error))
        .then(response => response.json())
        .then(response => this.checkUser(response))
    }

    checkUser = (response) => {
        response.jwt
        ? this.invokeLogIn(response.jwt)
        : console.log('Not Found')
    }

    invokeLogIn = (auth_token) => {
        localStorage.setItem('token', auth_token)
        this.props.fetchFoods()
    }

    render() {
        const { username, password, firstName, lastName } = this.state
        return (
            <div>
                <h1>Create New User</h1>
                <form className='createNewUser-form' onSubmit={this.handleSubmit}>
                    <label>First Name:</label>
                    <input className='firstName-input' name='firstName' placeholder='Enter your first name' value={firstName} onChange={this.handleChange} />
                    <label>Last Name:</label>
                    <input className='lastName-input' name='lastName' placeholder='Enter your last name' value={lastName} onChange={this.handleChange} />
                    <label>Email:</label>
                    <input className='username-input' name='username' placeholder='Enter your email' value={username} onChange={this.handleChange} />
                    <label>Password:</label>
                    <input className='password-input' type='password' name='password' placeholder='Enter your password' value={password} onChange={this.handleChange} />
                    <button className="button-login" type="submit">Log In</button>
                </form>
            </div>
        )
    }
}