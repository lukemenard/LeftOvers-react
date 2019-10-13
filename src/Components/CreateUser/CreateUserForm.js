import React, { Component } from 'react'
import './CreateUserForm.css'

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
            <div className='new-user-container'>
                <form className='createNewUser-form' onSubmit={this.handleSubmit}>
                <h3 className='new-user-message'>Please complete the new user form</h3>
                        <div>
                            <label>First name:</label>
                            <input className='new-name-input' name='firstName' value={firstName} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Last name:</label>
                            <input className='new-name-input' name='lastName' value={lastName} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input className='new-username-input' name='username' value={username} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input className='new-username-input' type='password' name='password' value={password} onChange={this.handleChange} />
                        </div>
                    <button className="button-login" type="submit">Create User</button>
                </form>
            </div>
        )
    }
}