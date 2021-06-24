import React, {useState, useEffect} from 'react'

const App = () => {

    const [darkmode, setDarkMode] = useState(false)
    const body = document.getElementById('body');
    const toggle = document.getElementById('toggle')

    useEffect(() => {
        if(darkmode === false){
            body.classList.add('dark')
        }else{
            body.classList.add('light')
        }
    }, [darkmode])
    
    return (
        <div>
            <button
            id = 'toggle'
            onClick = {() => {alert('hello')}} 
            >
                Click Here To Toggle
            </button>
        </div>
    )
}

export default App
