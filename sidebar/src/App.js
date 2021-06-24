import React, {useState} from 'react'
import Sidebar from 'react-sidebar'

const App = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (


    <div>
                
            <Sidebar
                sidebar = { <h1>Hello</h1> }
                open = {sidebarOpen}
                onSetOpen = {sidebarOpen}
            >
                <button
                onClick = {() => {
                    if(sidebarOpen === false){
                        setSidebarOpen(true)
                    }
                }}
            >
                Open
            </button>
            </Sidebar>
        </div>
    )
}

export default App
