import React from 'react';
import { useState } from 'react';


function Counter(){

     const [Counter, setCounter] = useState(0)

       const addValue=()=>{
        //setCounter(Counter+1);
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
       }

       const removeValue=()=>{
        setCounter(Counter-1);
       }


    return(
        <div>
           <h1>Viru Don</h1>
           <h1>{Counter}</h1>
           <button onClick={addValue}>Add value</button>
           <button onClick={removeValue}>Remove Value</button>
        </div>
    )



}


export default Counter;