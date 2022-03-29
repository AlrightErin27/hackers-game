import React from "react";

function Question({ question, nextQuestion }) {
  // console.log(question[0].answers)
  const { id, questionPrompt, answers, correctAnswer } = question[0];
  //console.log(answers)
  return (
    <>
      <h3>Question {id}</h3>
      <h4>{questionPrompt}</h4>
      {answers.map((answer, index) => {
        const isCorrect = index === correctAnswer;
        let answerLetter = "A";
        if (index === 1) {
          answerLetter = "B";
        } else if (index === 2) {
          answerLetter = "C";
        } else if (index === 3) {
          answerLetter = "D";
        }
        return (
          <div key={answerLetter}>
            <button
              className="answer-button"
              key={answer}
              onClick={() => nextQuestion(isCorrect)}
            >
              {answerLetter}
            </button>{" "}
            <p key={answerLetter}>{answer}</p>
          </div>
        );
      })}
    </>
  );
}

export default Question;
