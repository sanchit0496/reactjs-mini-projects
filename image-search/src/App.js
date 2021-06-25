import React from 'react'

class App extends React.Component{

    constructor(props){
        super(props)
        this.setState = {
            pics: []
        }
        this.fetchPics = this.fetchPics.bind(this)
    }

   
    fetchPics(){
        alert('clicked')
    }

    render(){
        return(
            <div>
                <input type="text" placeholder = 'Enter Value'/>
                <input type="submit" onClick = {this.fetchPics}/>
            </div>
        )
    }

}

export default App
