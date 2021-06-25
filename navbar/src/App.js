import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header.js';
import About from './About.js'


const App = () => {
    return (
        <Router>
            Welcome to the page
            <Header />
            <Switch>
                <Route path = "/about" component = {About}/>
            </Switch>
        </Router>
    )
}

export default App
