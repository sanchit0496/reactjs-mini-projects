import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';
import Review from './Review.js';

class App extends React.Component{

    render(){
        return(
            <>
            <h1>App</h1>
            <Review />
            </>
        )
    }
}

export default App;