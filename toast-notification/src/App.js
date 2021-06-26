import React from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const notify = () => {
    toast('hello')
}

const App = () => {
    return (
        <div>
            <button onClick = {notify}>Toast</button>
        </div>
    )
}

export default App
