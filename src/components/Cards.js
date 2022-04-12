import React from "react";
import uniqid from "uniqid";

const Cards = (props) => {
  return (
    <div className="card-display">
      {props.cards.map((card) => {
        return (
          <div
            className="card"
            key={uniqid("sushi-")}
            onClick={() => props.randomize(card.id)}
          >
            <img className="sushi-image" src={card.src} />
            <p>{card.id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
