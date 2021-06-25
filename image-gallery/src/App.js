import React, { Component } from 'react'
import Photo from './Photo.js';
import './index.css'

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
                {
                    this.state.pics.map((pic) => {
                        return <img src = {pic.download_url} key = {pic.id}/>
                    })
                }
            </div>
        )
    }
}

export default App
