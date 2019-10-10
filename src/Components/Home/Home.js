import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar'

const Home = () => {
    return (
        <div>
            <Router>
              <div>
                <NavBar />
              </div>
            </Router>
        </div>
    );
}

export default Home;
