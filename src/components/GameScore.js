import React from "react";

const GameScore = (props) => {
  return (
    <div>
      <p>Score: {props.score}</p>
      <p>Best score: {props.bestScore}</p>
    </div>
  );
};

export default GameScore;
