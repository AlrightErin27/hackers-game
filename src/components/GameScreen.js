import React, { useState } from "react";
import Game from "./Game";

// component holds the area where the game and multiple choice answers will be displayed
function GameScreen({ qList }) {
  const [questions, setQuestions] = useState(qList);
  const [gameStatus, setGameStatus] = useState(true);
  //console.log(qList);

  return (
    <div>
      {gameStatus ? (
        <button onClick={() => setGameStatus(!gameStatus)}>Start</button>
      ) : (
        <Game questions={questions} />
      )}
    </div>
  );
}

export default GameScreen;
