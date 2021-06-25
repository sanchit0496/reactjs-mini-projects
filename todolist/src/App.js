import React, { Component } from 'react'

export class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            tasks:  []
        };
    }

    render() {
        return (
            <div>

                <form onSubmit = {this.addTask}>
                    <input type="text" ref = "newTask"/>
                    <button type = "submit">Add</button>
                </form>
                
            </div>
        )
    }
}

export default App
