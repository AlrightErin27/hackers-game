import React from "react";

function Question({ question, nextQuestion }) {
  // console.log(question[0].answers)
  const { id, questionPrompt, answers, correctAnswer } = question[0];
  //console.log(answers)
  return (
    <>
      <h3>{questionPrompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctAnswer;
        return (
          <button key={answer} onClick={() => nextQuestion(isCorrect)}>
            {answer}
          </button>
        );
      })}
    </>
  );
}

export default Question;
