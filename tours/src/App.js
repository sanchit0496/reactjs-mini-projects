import React, { useState } from 'react';




const App = () => {
    const url = 'https://course-api.com/react-tours-project';

    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        const response = await fetch(url);
        const tourdata = await response.json();
        setTours(tourdata);
        console.log({tours});
    }


    return (
        <div>
           <h1>Hello</h1>
        </div>
    )
}

export default App
