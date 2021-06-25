import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/about">About</Link>
                </li>
                <li>
                    <Link to = "/sports">Sports</Link>
                </li>
                <li>
                    <Link to = "/business">Business</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
