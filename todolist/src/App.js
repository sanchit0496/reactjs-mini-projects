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

    removeTask(name){
        let afterTasks = this.state.tasks;
        let newTasks = [];
        for(let i = 0; i < afterTasks.length; i++){
            if(afterTasks[i] !== name){
                newTasks.push(afterTasks[i])
            } 
        }
        this.setState({tasks: newTasks})
    }

    render() {
        return (
            <div>

                <form onSubmit = {this.addTask}>
                    <input type="text" ref = "newTask"/>
                    <button type = "submit">Add</button>
                </form>
                {
                    this.state.tasks.map(task => (
                        <li>{task} <button onClick = {() => {this.removeTask(task)}}>Remove</button></li>
                    ))
                }
            </div>
        )
    }
}

export default App
