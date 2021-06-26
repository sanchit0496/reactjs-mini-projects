import React, { Component } from 'react'


export class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            person: []
        }
        this.fetchPerson = this.fetchPerson.bind(this)
    }

    componentDidMount(){
        this.fetchPerson();
    }

    fetchPerson(){
        let url = 'https://randomuser.me/api/'
        fetch(url)
        .then(response => response.json())
        .then(res => this.setState({person: res.results}))
        
    }
    // 

    render() {
        return (
            <div>
                {
                    this.state.person.map((kid) => {
                        return <h4>{kid.email}</h4>
                    })
                }
                <input type="submit" onClick = {this.fetchPerson} />
            </div>
        )
    }
}

export default App
