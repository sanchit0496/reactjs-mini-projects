import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './Login'
import Home from './Home'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = {Login}/>
            <Route exact path = "/home" component = {Home}/>
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
