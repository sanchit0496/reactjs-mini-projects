import React, { useState } from 'react';


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            destination: [],
            error: null
        }
    }

    fetchLocation = () => {
        fetch(`https://course-api.com/react-tours-project`)
        .then(response => response.json)
        .then(data => {
            this.setState({
                users:data,
                isLoading: false
            })
        }).catch(error => this.setState( {error, isLoading: false} ))
    }

    componentDidMount(){
        this.fetchLocation();
    }

}
export default App
