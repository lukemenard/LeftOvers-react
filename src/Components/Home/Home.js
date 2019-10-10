import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import Fridge from '../Fridge/Fridge'
import WasteDashboard from '../Waste/WasteDashboard'
import Recipe from '../Recipe/Recipe'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <NavBar />
                        <Route exact path='/fridge' render={(props) => <Fridge {...this.props} />} />
                        <Route exact path='/dashboard' component={WasteDashboard} />
                        <Route exact path='/recipe' component={Recipe} />
                    </div>
                </Router>
            </div>
        )
    }
}
