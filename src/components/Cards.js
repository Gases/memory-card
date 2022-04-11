import React, { useEffect } from "react";
import uniqid from "uniqid";

const Cards = () => {
  const [cards, setCards] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  function randomizeCards() {
    const cardsCopy = [...cards];
    setCards(cardsCopy.sort(() => Math.random() - 0.5));
  };

  return (
    <div className="card-display">
      {cards.map((card) => {
        return (
          <div className="card" key={uniqid("card-")} onClick={randomizeCards}>
            {card}
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
