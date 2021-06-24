import React, {Component} from 'react'
import { render } from 'react-dom'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message: 'hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }



    clickHandler(){
        this.setState({
            message:'yeah'
        })
    }
    render(){
        return(
            <div>   
    
                {this.state.message}
                <button onClick = {this.clickHandler}>Click</button>
    
            </div>
        )
    }
    

}


export default App
