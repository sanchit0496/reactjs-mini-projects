import React, {useState} from 'react'
import Sidebar from 'react-sidebar'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sidebarOpen : false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)

    }

    onSetSidebarOpen(open){
        this.setState({sidebarOpen: open})
    }

    render(){
        return(
            <Sidebar
                sidebar = {<p>Hello</p>}
                open = {this.state.sidebarOpen}
                onSetOpen = {this.onSetSidebarOpen}
            >
                <button onClick={() => this.onSetSidebarOpen(true)}>
                    Open sidebar
                </button>

            </Sidebar>
        )
    }

}

export default App
