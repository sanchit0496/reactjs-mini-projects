import React from 'react'

class App extends React.Component{

    constructor(props){
        super(props)
        this.setState = {
            value: '',
            pics: []
        }
        this.fetchPics = this.fetchPics.bind(this)
    }

   
    fetchPics(event){
        event.preventDefault();
        let a = document.getElementById('term').value;
        console.log(a)
        let url = 'https://pixabay.com/api/?key=22238304-8a144d939bdfe845e8130ae3b&q=yellow+flowers&image_type=photo'
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.fetchPics}>
                    <input type="text" id='term' placeholder = 'Enter Value'/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default App
