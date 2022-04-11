import React from "react";
import Cards from "./components/Cards";
import GameScore from "./components/GameScore";
import "./App.css";

function App() {
  
  return (
    <>
      <header>
        <h1>Memory game</h1>
      </header>
      <>
        <GameScore />
        <Cards />
      </>
    </>
  );
}

export default App;
