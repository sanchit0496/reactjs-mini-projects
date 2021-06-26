import React from 'react';
import { render } from 'react-dom';
import CountUp from 'react-countup';



const App = () => {
    return (
        <div>
      {/* <CountUp isCounting start={10} end={0} duration={10} easing="linear" /> */}
      <CountUp isCounting end={2000} duration={3.2} />

        </div>
    )
}

export default App
