import React, { useState } from "react";
import Game from "./Game";

// component holds the area where the game and multiple choice answers will be displayed
function GameScreen({ qList, currentUser, updateScore }) {
  const [questions, setQuestions] = useState(qList);
  const [gameStatus, setGameStatus] = useState(true);
  //console.log(qList);

  return (
    <div className="game-wrapper">
      {gameStatus ? (
        <h3 className="start-button" onClick={() => setGameStatus(!gameStatus)}>
          Start
        </h3>
      ) : (
        <Game questions={questions} currentUser={currentUser} updateScore={updateScore} />
      )}
    </div>
  );
}

export default GameScreen;
