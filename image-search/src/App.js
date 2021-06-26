import React from 'react'

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            pics: [],
            
        }
        this.fetchPics = this.fetchPics.bind(this)
    }

   
    fetchPics(e){
        e.preventDefault();
        let a = document.getElementById('term').value;
        let url = `https://pixabay.com/api/?key=22238304-8a144d939bdfe845e8130ae3b&q=${a}&image_type=photo`;

        fetch(url)
        .then(response => response.json())
        .then(res => this.setState({pics: res.hits}))
    }

    render(){
        return(
            <div>
                <form action = '#' onSubmit = {this.fetchPics}>
                    <input type="text" id='term' placeholder = 'Enter Value'/>
                    <input type="submit" />
                </form>
                
                {
                    this.state.pics.map((photo) => {
                        return <img src= {photo.largeImageURL} key={photo.id} />
                    })
                }
            </div>
        )
    }

}

export default App
