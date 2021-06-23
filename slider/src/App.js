import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App(){
    const [people, setPeople] = useState(data)
    const [index, setIndex] = React.useState(0)

    useEffect(() => {
        const lastIndex = people.length -1;
        if(index < 0){
            setIndex(lastIndex);
        }
        if(index > lastIndex){
            setIndex(0);
        }
    }, [index, people])


    

}

export default App
