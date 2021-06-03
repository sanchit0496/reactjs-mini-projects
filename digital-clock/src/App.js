import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            clock : new Date()
        }
    }


    componentDidMount(){
        setInterval(() => {
            this.setState({clock: new Date()})
        }, 1000);
    }


    render(){
        return(
            <h1>{this.state.clock.toLocaleString()}</h1>
        )
    }
}

export default App;