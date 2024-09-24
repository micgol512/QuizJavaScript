import "../components/QuestionForm.css";
import Button from "./Button";
const QuestionForm = ({ question, nextQuestion }) => {
  return (
    <>
      <h2>{question.text}</h2>
      <div id="answers">
        <Button onClick={() => nextQuestion(0)}>{question.answers[0].text}</Button>
        <Button onClick={() => nextQuestion(1)}>{question.answers[1].text}</Button>
        <Button onClick={() => nextQuestion(2)}>{question.answers[2].text}</Button>
        <Button onClick={() => nextQuestion(3)}>{question.answers[3].text}</Button>
      </div>
    </>
  );
};
export default QuestionForm;
