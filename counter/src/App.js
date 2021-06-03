import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {count: 0}
    }

    incr = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    decr = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render(){
        return(
            <div>
                <button onClick = {this.incr}>Increment</button>
                <button onClick = {this.decr}>Decrement</button>
                <h1>{this.state.count}</h1>
            </div>
        )
    }

}

export default App;