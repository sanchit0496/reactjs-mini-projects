import React, {useState} from 'react'
import data from './data.js';
import List from './List.js';

function App(){
    const [people, setPeople] = useState(data);
    return(
        <div>
            <List people = {people} />
            <button onClick = { () => setPeople([])}>Clear Birthdays</button>
        </div>
    )
}


export default App
    