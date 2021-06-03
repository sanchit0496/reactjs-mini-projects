import React, { useState } from 'react';


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            destinations: [],
            error: null
        }
    }

    fetchLocation = () => {
        fetch(`https://course-api.com/react-tours-project`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                destinations:data,
                isLoading: false
            })
        }).catch(error => this.setState( {error, isLoading: false} ))
    }

    componentDidMount(){
        this.fetchLocation();
    }

    removeD = (id) => {
        const{destinations, isLoading, error} = this.state
        const newTours = destinations.filter((destination) => destination.id !== id)
        this.setState({destinations: newTours})
        console.log(destinations)
    }


    render(){
        const{destinations, isLoading, error} = this.state

        return(
            <React.Fragment>
                <h1>Random User</h1>
                {
                    error? <p>error.message</p> : null
                }
                {
                    !isLoading ? (
                        destinations.map(destination => {
                            return(
                                <div key = {destination.id}>
                                    <p>{destination.name}</p>
                                    <button onClick = { () => {this.removeD(destination.id)}}>
                                        Remove
                                    </button>
                                </div>
                            )
                        })           
                    ) : (
                        <h2>Loading</h2>
                    )
                }
            </React.Fragment>
        )
    }

}
export default App
