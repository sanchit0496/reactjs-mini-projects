import React, {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Questions from './data.js';

const Question = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <article>
            <h4>{title}</h4>
            <button onClick = { () => setShowInfo(!showInfo)}>
                {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
            {showInfo && <p>{info}</p>}
        </article>
    )
}

export default Question;