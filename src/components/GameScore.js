import React from 'react';

const GameScore = (props) => {
  const [score, setScore] = React.useState(0)
  const [bestScore, setBestScore] = React.useState(0);

  return (
    <div>
      <p>Score: {score}</p>
      <p>Best score: {bestScore}</p>
    </div>
  )
}

export default GameScore;