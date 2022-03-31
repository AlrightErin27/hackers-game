import React, { useState, useEffect } from "react";
import Question from "./Question";

function Game({ questions, currentUser, updateScore }) {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [numberOfCorrectAnswers, setNum] = useState(0);
  
  useEffect(() => {
    fetch(`http://localhost:3000/users/${currentUser.key}`, {
      method: 'PATCH',
      body: JSON.stringify({
        score: numberOfCorrectAnswers,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => updateScore(numberOfCorrectAnswers))
  },[currentQuestionId])


  const currentQuestion = questions.filter((q) =>
    currentQuestionId === q.id ? q : null
  );

  function handleClick(isCorrect) {
  
    setCurrentQuestionId(currentQuestionId + 1);
    if (isCorrect) {
      setNum(numberOfCorrectAnswers + 1);
    }}


  function resetGame(){
    setCurrentQuestionId(1)
    setNum(0)
  }
  


  return (
    <div className="game-container">
      {currentQuestionId <= questions.length ? (
        <Question question={currentQuestion} nextQuestion={handleClick} />
      ) : ( <div>
        <h2>Number right: {numberOfCorrectAnswers}</h2>
        <h1 className="start-button" onClick={resetGame}>Try Again</h1>
      </div>)}
    </div>
  );
}

export default Game;
