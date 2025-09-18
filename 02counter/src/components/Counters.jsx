import React from 'react';
import { useState } from 'react';

function Counters(){

    const [Counters, setCounter] = useState(0);
    const addValue = () =>{
        setCounter(Counters+1);
        setCounter(Counters+1);
        setCounter(Counters+1);
        setCounter(Counters+1);
    }
    const removeValue = () =>{
        setCounter(Counters-1);
    }
    return(
        <div>
            <h1>Amit</h1>
            <h1>{Counters}</h1>
            <button onClick={addValue}>addValue</button>
            <button onClick={removeValue}>removeValue</button>
        </div>
    )
}



export default Counters;