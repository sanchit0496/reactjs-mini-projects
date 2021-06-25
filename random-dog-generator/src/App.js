import React, { Component } from 'react'

export class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            imgSrc : '',
            didload: false
        }
        this.fetchImg = this.fetchImg.bind(this);
    }

    componentDidMount(){
        this.fetchImg();
    }

    fetchImg(){
        let url = `https://api.giphy.com/v1/gifs/random?tag=dog&api_key=25epsat6s97tTNp44xAfHe91wwUHPh5W`;

        fetch(url)
        .then(response => response.json())
        .then(res => this.setState({imgSrc: res.data.image_url, didload: true}))
        
    }

    

    render() {
        return (
            <div>
                
                {this.state.didload ? <img src= {this.state.imgSrc} alt="" /> :<span>Loading</span> }
                
                <button onClick = {this.fetchImg}>Next</button>
            </div>
        )
    }
}

export default App
