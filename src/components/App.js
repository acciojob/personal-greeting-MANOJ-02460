
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleChange=(e)=>{

    const rawInput = e.target.value

    const greeting = rawInput === "" ?"":`Hello, ${rawInput}`;

    setInput(greeting)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        Enter your name : <br></br>
        <input type="text" onChange={handleChange}/>

        <div>{input}</div>
    </div>
  )
}

export default App
