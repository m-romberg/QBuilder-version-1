import './Questions.css';


/**
 * Questions
 *
 * Displays questions to be asked
 *
 * props:
 *    - questions: [], questions from QBuilder API
 *
 * state:
 *    - none
 *
 * QuestionPage =>  Questions
 */
function Questions({ questions }) {
  console.debug("Inside Questions");

  const topThreeQuestions = questions.slice(0, 3);

  return (
    <div className="Questions">
    Questions
    </div>
  );
}

export default Questions;