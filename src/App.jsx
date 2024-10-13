import { useState } from "react";
import QUESTIONS from "./quizQuestions";
import QuestionForm from "./components/QuestionForm";
import Result from "./components/Result";
import QuizTime from "./components/QuizTime";

import "./App.css";

const userAnswers = [];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [score, setScore] = useState(0);
  const [amountQuestion, setAmountQuestion] = useState(10);

  const nextQuestion = (answer) => {
    if (
      currentQuestionIndex !== -1 &&
      answer === findCorrectAnswerIndex(QUESTIONS[currentQuestionIndex])
    ) {
      setScore(score + 1);
    }
    if (currentQuestionIndex !== -1) userAnswers.push(answer);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const resetQuiz = () => {
    userAnswers.length = 0;
    setCurrentQuestionIndex(-1);
    setScore(0);
    setAmountQuestion(10);
  };
  const findCorrectAnswerIndex = (question) => {
    return question.answers.findIndex((answer) => answer.isCorrect);
  };
  const selectTimeLong = (e) => {
    setAmountQuestion(parseInt(e.target.value));
  };

  const renderStartScreen = () => (
    <>
      <h2>Sprawdź swoją wiedzę o programowaniu</h2>
      <QuizTime onChange={selectTimeLong} />
      <button onClick={() => nextQuestion(-1)}>Start QUIZ!!!</button>
    </>
  );

  const renderQuestionScreen = () => (
    <>
      <h3>Pytanie nr {currentQuestionIndex + 1}</h3>
      <QuestionForm
        question={QUESTIONS[currentQuestionIndex]}
        nextQuestion={nextQuestion}
      />
      <button onClick={resetQuiz}>Reset QUIZ</button>
    </>
  );

  const renderResultScreen = () => (
    <>
      <Result
        arrQuestion={QUESTIONS}
        arrAnswers={userAnswers}
        amountQuestion={amountQuestion}
      />
      <button onClick={resetQuiz}>Reset QUIZ</button>
    </>
  );

  const renderCurrentView = () => {
    if (currentQuestionIndex === -1) {
      return renderStartScreen();
    } else if (currentQuestionIndex !== amountQuestion) {
      return renderQuestionScreen();
    } else {
      return renderResultScreen();
    }
  };

  return (
    <>
      <h1>QUIZ JAVASCRIPT</h1>
      {renderCurrentView()}
    </>
  );
}

export default App;
