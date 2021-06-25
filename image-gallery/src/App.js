import React, { Component } from 'react'

export class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            pics: []
        }
    }

    loadPics(){
        let url =  'https://picsum.photos/v2/list';
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
