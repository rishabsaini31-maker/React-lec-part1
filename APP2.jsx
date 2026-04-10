import { useState , useEffect } from "react";
import React from "react";

function Appp() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>This is a simple React component.</p>
    </div>
  );
}
// mounnting , re-rendering , unmounting

function Counter() {
  const [count, setCount] = React.useState(0);

// hooking into lifecycle events of react component
console.log("Render Count:", count);

// gaurd our setInterval from re-renders
useEffect(() => {   
  setInterval(() => {
    setCount((prevCount) => prevCount + 1);
  }, 1000);
  
  console.log("Component Mounted");
}, []); 



  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1 id="counter">{count}</h1>
      <button onClick={() => increaseCount()}>Increase count</button>
      <button onClick={() => decreaseCount()}>Decrease count</button>
    </div>
  );
}

export default Counter;