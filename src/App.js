import React from "react";
import {useState}  from 'react';


export const App=()=> {
  const [count, setcount] = useState(1);
  function decrement(){
    setcount(prevcount=>prevcount-1)
  }
  function increment(){
    setcount(preCount=>preCount+1)
  }
   return(

  <div className="holder">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
  </div>
);
};
