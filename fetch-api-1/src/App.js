import React, {useState} from "react";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            error: null
        }
    }

    fetchUsers = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                users:data,
                isLoading: false
            })
        }).catch(error => this.setState({error, isLoading:false}));
    }

    componentDidMount(){
        this.fetchUsers();
    }

    render(){
        const {isLoading, users, error} = this.state;
        return(
            <React.Fragment>
                <h1>Random User</h1>
                {
                error ? <p>error.message</p> : null
                }
                {
                    !isLoading? (
                        users.map(user => {
                            //const {username, name, email} = user;
                            return(
                                <div key = {user.username}>
                                <p>Name: {user.name}</p>
                                <p>Email: {user.email}</p>    
                                <hr />
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
