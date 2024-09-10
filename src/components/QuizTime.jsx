import "../components/QuizTime.css";
const QuizTime = ({ onChange }) => {
  console.log(onChange);

  return (
    <div id="select-wrapper">
      <label>Jak długi ma być test? </label>
      <select name="amount-question" onChange={onChange}>
        <option value="10">Krótki (10 Pytań)</option>
        <option value="20">Średni (20 Pytań)</option>
        <option value="30">Długi (30 Pytań)</option>
      </select>
    </div>
  );
};
export default QuizTime;

{
  /* <label for="amount-question">How time of quiz </label>
          <select name="amount-question">
            <option value="10">short</option>
            <option value="20">medium</option>
            <option value="30">long</option>
          </select> */
}
