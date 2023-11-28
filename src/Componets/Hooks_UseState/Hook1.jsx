import React, { useState } from 'react'

export default function Hook1() {
    const [count, setCount] =useState(5)
    const Increment2 =() =>{
        setCount ((count) => count+1)
        setCount ((count) => count+1)
        setCount ((count) => count+1)
    }
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={Increment2}>Increment2</button>
    </div>
  )
}

