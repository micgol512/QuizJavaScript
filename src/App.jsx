import { useState } from "react";
import QUESTIONS from "./quizQuestions";
import QuestionForm from "./components/QuestionForm";
import ResultForm from "./components/ResultForm";
import Button from "./components/Button";
import QuizTime from "./components/QuizTime";
import "./App.css";

const userAnswers = [];

function App() {
  const [question, setQuestion] = useState(-1);
  const [score, setScore] = useState(0);
  const [timeLong, setTimeLong] = useState(30);

  const nextQuestion = (answer) => {
    if (question !== -1 && answer === findCorrectAnswerIndex(QUESTIONS[question])) {
      setScore(score + 1);
    }
    if (question !== -1) userAnswers.push(answer);
    setQuestion(question + 1);
  };
  const resetQuiz = () => {
    userAnswers.length = 0;
    setQuestion(-1);
    setScore(0);
  };
  const findCorrectAnswerIndex = (question) => {
    return question.answers.findIndex((answer) => answer.isCorrect);
  };
  const selectTimeLong = (e) => {
    setTimeLong(parseInt(e.target.value));
  };
  return (
    <>
      <h1>QUIZ JAVASCRIPT</h1>
      {question === -1 ? (
        <>
          <h2>Sprawdź swoją wiedzę o programowaniu</h2>
          <QuizTime onChange={selectTimeLong} />
          <Button onClick={() => nextQuestion(-1)}>Start QUIZ!!!</Button>
        </>
      ) : question !== timeLong ? (
        <>
          <h3>Pytanie nr {question + 1}</h3>
          <QuestionForm question={QUESTIONS[question]} nextQuestion={nextQuestion} />
          <Button onClick={resetQuiz}>Reset QUIZ</Button>
        </>
      ) : (
        <>
          <ResultForm
            arrQuestion={QUESTIONS}
            arrAnswers={userAnswers}
            timeLong={timeLong}
          />
          <Button onClick={resetQuiz}>Reset QUIZ</Button>
        </>
      )}
    </>
  );
}

export default App;
