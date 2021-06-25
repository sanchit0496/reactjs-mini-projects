import React, { Component } from 'react'

export class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            pics: [],
            isLoading: false
        }
        this.loadPics = this.loadPics.bind(this);
        
    }

    componentDidMount(){
        this.loadPics();
    }

    loadPics(){
        let url =  `https://picsum.photos/v2/list`;

        fetch(url)
        .then(response => response.json())
        .then(res => this.setState({pics: res, isLoading: true}))
        
    }

    render() {
        return (
            <div>
                App
                
            </div>
        )
    }
}

export default App
