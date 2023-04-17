import React, { useState } from "react";
import "./App.css";
import Keypad from "./components/Keypad";

function App() {
  const [result, setResult] = useState("");


  function clear(){
    setResult("")
  }

  function deleteChar(){
    setResult(result.slice(0,-1))
  }

  function handleClick(e){
    const lastChar = result[result.length - 1];
    const allowedChars = /[0-9+\-*/.]/;

    if (result === "" && /[*/.]/.test(e.target.name)) {
      // Don't allow the user to start with *, /, or .
      return;
    } else if (!allowedChars.test(e.target.name)) {
      // Only allow numbers and valid operators
      return;
    } else if (/[\-+*/.]$/.test(result) && /[\-+*/.]/.test(e.target.name)) {
      // Don't allow consecutive operators or .
      return;
    } else if (lastChar === "." && e.target.name === ".") {
      // Don't allow consecutive .
      return;
    }
setResult(result.concat(e.target.name))
  }



  function calculate(){
      setResult(eval(result).toString())
  }

  return (
    <div className="calculator" >
      <div>
        <input type="text" value={result} readOnly />
      </div>

      <Keypad clear={clear} handleClick={handleClick}  calculate={calculate} deleteChar={deleteChar}/>
    </div>
  );
}

export default App;
