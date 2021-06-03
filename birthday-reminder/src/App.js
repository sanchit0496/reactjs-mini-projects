import React, {useState} from 'react'
import data from './data.js';
import List from './List.js';

function App(){
    const [people, setPeople] = useState(data);
    return(
        <List people = {people} />
    )
}


export default App
    