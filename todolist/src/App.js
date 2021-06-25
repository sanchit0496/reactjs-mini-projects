import React, { Component } from 'react'

export class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            tasks:  []
        };
        this.addTask = this.addTask.bind(this)
    }

    addTask(event){
        event.preventDefault();
        let taskArray = this.state.tasks;
        let newTaskInput = this.refs.newTask.value;
        taskArray.push(newTaskInput);
        this.setState({tasks: taskArray})
        this.refs.newTask.value = "";
        console.log(taskArray)
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
