import './QuestionPage.css';


/**
 * QuestionPage
 *
 * Displays questions to be asked
 * Renders button to start recording and button to request a solution.
 *
 * props:
 *    - record: fn to start recording
 *    - questions: [], questions to ask from QBuilder API
 *    - submit: submit all context for a solution
 *
 * state:
 *    - none
 *
 * SalesAssistant => QuestionPage => { StartButton, SubmitButton, Questions }
 */
function QuestionPage() {
  return (
    <div className="QuestionPage">
    </div>
  );
}

export default QuestionPage;