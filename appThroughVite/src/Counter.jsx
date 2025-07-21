import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    // const addNumber=()=>{
    //     console.log(counter);
        
    //     setCounter(counter+1);
    //      //setCounter(counter+1);

         
      
    // }


    const addNumber = () => {
        console.log(counter);
        
        setCounter((prev)=>prev + 1);
        
    }

    console.log(counter);
      const subNumber=()=>{
        setCounter(counter-1)
    }
  return (
    <>
    <h1>{`Counter value is ${counter}`}  </h1>
    <button onClick={addNumber}>Add</button>
    <button onClick={subNumber}>sub</button>
    </>
  )
}

export default Counter;