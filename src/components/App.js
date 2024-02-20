
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0)
  const counter = () => {
        setCount(count + 1)
        
  }
  return (
    <div>
        <p>Button clicked {count} times</p>
        <button onClick={counter}>click me</button>
    </div>
  )
}

export default App
