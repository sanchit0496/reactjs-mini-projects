import React, {useState, useEffect} from 'react'
import './index.css'

const App = () => {

    const [darkmode, setDarkMode] = useState(false)
    const body = document.getElementById('root');
    const toggle = document.getElementById('toggle')

    useEffect(() => {
        if(darkmode === false){
            body.classList.add('dark')
        }else{
            body.classList.remove('dark')
        }
    }, [darkmode])
    
    return (
        <div>
            <button
            id = 'toggle'
            onClick = {() => {
                if(darkmode === true){
                    setDarkMode(false)
                }else if(darkmode === false){
                    setDarkMode(true)
                }
            }} 
            >
                Click Here To Toggle
            </button>
        </div>
    )
}

export default App
