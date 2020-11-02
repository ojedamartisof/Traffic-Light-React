import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [luz, setLuz] = useState("");

  return (
    <div className="container">
      <div id="top">
      </div>
      <div id="semaforo">
        <div className={"red" + (luz === "luzRed" ? " luzRed" : "")} onClick={(e) => {
          e.target.className === "red" ? setLuz("luzRed") : setLuz("red")
        }}></div>
        <div className={"yellow" + (luz === "luzYellow" ? " luzYellow" : "")} onClick={(e) => {
          e.target.className === "yellow" ? setLuz("luzYellow") : setLuz("yellow")
        }}></div>
        <div className={"green" + (luz === "luzGreen" ? " luzGreen" : "")} onClick={(e) => {
          e.target.className === "green" ? setLuz("luzGreen") : setLuz("green")
        }}></div>
      </div>
    </div>
  );
}

export default App;
