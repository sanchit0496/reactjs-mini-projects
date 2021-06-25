import React from 'react'

class App extends React.Component{

    constructor(props){
        super(props)
        this.setState = {
            pics: []
        }
    }

    componentDidMount(){
        this.fetchPics()
    }

    fetchPics(){

    }

    render(){
        return(
            <div>
                App
            </div>
        )
    }

}

export default App
