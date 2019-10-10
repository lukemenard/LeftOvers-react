import React, { Component } from 'react'
import CreateUserForm from '../CreateUser/CreateUserForm'
import LoginForm from './LoginForm'

export default class Login extends Component {
    state = {
        newUser: false
    }

    handleNewUser = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    render() {
        const { newUser } = this.state
        return (
            <div>
                {newUser
                ? <CreateUserForm fetchFoods={this.props.fetchFoods} />
                : <LoginForm fetchFoods={this.props.fetchFoods} handleNewUser={this.handleNewUser} />
                }
            </div>
        )
    }
}



           