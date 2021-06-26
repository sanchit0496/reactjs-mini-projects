import React from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const notify = () => {
//     toast('Hello There 4', 
//     {position: toast.POSITION.BOTTOM_LEFT})
//  toast('Hello There 6', 
//     {position: toast.POSITION.BOTTOM_RIGHT})
//  toast('Hello There 5', 
//     {position: toast.POSITION.BOTTOM_CENTER})
//  toast('Hello There 1', 
//     {position: toast.POSITION.TOP_LEFT})
//  toast('Hello There 3', 
//     {position: toast.POSITION.TOP_RIGHT})
//  toast('Hello There 2', 
//     {position: toast.POSITION.TOP_CENTER})

    toast.success('successful')
    // toast.info('info', {autoClose: 2000})

}

const App = () => {
    return (
        <div>
            <button onClick = {notify}>Toast</button>
        </div>
    )
}

export default App
