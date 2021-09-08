import React from 'react'
import {useHistory} from 'react-router-dom'

function Login() {
    let history = useHistory();

    return (
        <div>
            Login
            <button onClick = {() => {
                history.push("/Home")              
            }}>Login</button>
        </div>
    )
}

export default Login
