import React, { useState } from "react";
import Game from "./Game";
import User from "./User";

// component holds the area where the game and multiple choice answers will be displayed
function GameScreen({ qList, currentUser, updateScore, users }) {
  const [questions, setQuestions] = useState(qList);
  const [gameStatus, setGameStatus] = useState(true);
  //console.log(qList);

  const renderUsers = users.map((user) => {
    return <User key={user.key} user={user} />;
  });

  return (
    <>
      <p id="at-helm">
        {currentUser.name}@theHelm Score:{users[currentUser.key - 1].score}
      </p>
      <div className="after-login-container">
        <div className="game-screen">
          <div className="game-wrapper">
            {gameStatus ? (
              <h3
                className="start-button"
                onClick={() => setGameStatus(!gameStatus)}
              >
                Start
              </h3>
            ) : (
              <Game
                questions={questions}
                currentUser={currentUser}
                updateScore={updateScore}
              />
            )}
          </div>
        </div>
        <div className="users-container">
          <h2>Relics:</h2> {renderUsers}
        </div>
      </div>
    </>
  );
}

export default GameScreen;
