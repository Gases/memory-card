import React from "react";
import Cards from "./components/Cards";
import GameScore from "./components/GameScore";
import images from "./images";
import "./App.css";

function App() {
  const [clicked, setClicked] = React.useState([]);
  const [cards, setCards] = React.useState([...images]);
  const [score, setScore] = React.useState(-1);
  const [bestScore, setBestScore] = React.useState(0);

  function checkDuplicates(array) {
    return new Set(array).size === array.length;
  }
  
  function randomizeCards(card) {
    const cardsCopy = [...cards];
    setCards(cardsCopy.sort(() => Math.random() - 0.5));
    setClicked(clicked.concat(card));
  }
  
  React.useEffect(() => {
    if (checkDuplicates(clicked) && clicked.length >= 0) {
      setScore(score + 1);
      if (score > bestScore) {
        setBestScore(score)
      }
    } else {
      setScore(-1);
      setClicked([]);
    }
  }, [clicked]);

  return (
    <>
      <header>
        <h1>Memory game</h1>
      </header>
      <div>
        <GameScore score={score} bestScore={bestScore} />
        <Cards randomize={randomizeCards} cards={cards} />
      </div>
      <p>Clicked: {clicked.join(" ")}</p>
    </>
  );
}

export default App;
