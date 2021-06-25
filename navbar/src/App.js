import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header.js';
import About from './About.js'
import Sports from './Sports.js'
import Business from './Business.js'


const App = () => {
    return (
        <Router>
            Welcome to the page
            <Header />
            <Switch>
                <Route path = "/about" component = {About}/>
                <Route path = "/sports" component = {Sports}/>
                <Route path = "/business" component = {Business}/>
            </Switch>
        </Router>
    )
}

export default App
