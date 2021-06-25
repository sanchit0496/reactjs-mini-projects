import React from 'react'
import Header from './Header.js';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
 
const App = () => {
    return (
        <Router>
            <Header />
            App
        </Router>
    )
}

export default App
