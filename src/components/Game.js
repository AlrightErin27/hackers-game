import React, { useState } from "react";
import Question from "./Question";

function Game({ questions }) {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [numberOfCorrectAnswers, setNum] = useState(0);
  //   console.log("IN GAME.JS", questions);

  const currentQuestion = questions.filter((q) =>
    currentQuestionId === q.id ? q : null
  );

  function handleClick(isCorrect) {
    setCurrentQuestionId(currentQuestionId + 1);
    if (isCorrect) {
      setNum(numberOfCorrectAnswers + 1);
    }
  }
  console.log(currentQuestion);
  return (
    <div className="game-container">
      {currentQuestionId < questions.length ? (
        <Question question={currentQuestion} nextQuestion={handleClick} />
      ) : (
        <h2>Number right: {numberOfCorrectAnswers}</h2>
      )}
    </div>
  );
}

export default Game;
