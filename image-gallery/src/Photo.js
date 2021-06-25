import React from 'react'

const Photo = (props) => {

    return (
        <div>
            <img src={props.url} key = {props.id} />
        </div>
    )
}

export default Photo
