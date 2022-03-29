import React, { useState, useEffect } from "react";
import img01 from "../questions/q01.jpg";
import img02 from "../questions/q02.jpg";
import img03 from "../questions/q03.jpg";
import img04 from "../questions/q04.jpg";
import img05 from "../questions/q05.jpg";

function Question({ question, nextQuestion }) {
  const [currImg, setCurrImg] = useState("");

  // console.log(question[0].answers)
  const { id, questionPrompt, answers, correctAnswer } = question[0];

  //changes image when ever button is clicked
  //image position in arr matches question id
  const imgArr = [img01, img02, img03, img04, img05];
  useEffect(() => {
    for (let i = 1; i < imgArr.length; i++) {
      if (id === i) {
        setCurrImg(imgArr[i].toString());
      }
    }
  }, [nextQuestion]);

  return (
    <>
      <h3>Question {id}</h3>
      <img src={currImg} alt={questionPrompt} className="q-images" />
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
          <div key={answerLetter} className="answer-container">
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
