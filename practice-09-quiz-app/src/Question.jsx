import QuestionTimer from "./QuestionTImer";
import Answers from "./Answers";
import { useState } from "react";
import QUESTIONS from "./questions";

export default function Question({
  questionIndex,
  onSelectAnswer,
  onSkipAnswer,
}) {
  const [answer, setAnswer] = useState({
    text: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.text) {
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      text: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        text: answer,
        isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
      });
      setTimeout(() => {
        console.log("timeout in timeout");
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";
  if (answer.text && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.text) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timer={timer}
        onTimeout={answer.text === "" ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[questionIndex].text}</h2>
      <Answers
        answers={QUESTIONS[questionIndex].answers}
        selectedAnswer={answer.text}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
