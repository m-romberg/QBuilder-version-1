import { Container, Row, Col } from "react-bootstrap";
import './QuestionPage.css';
import Questions from './Questions';
import RecordButton from "../../buttons/RecordButton";
import SubmitButton from "../../buttons/SubmitButton";

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
function QuestionPage({ questions, record, submit }) {
  console.debug("Inside QuestionPage");

  const noQuestionMessage = "Please restart ".concat(
    "the sales assistant for additional questions OR request a final solution."
  );

  return (
    <Container className="QuestionPage">
      <Row>
        <Col>
          <Questions questions={questions} />
        </Col>
      </Row>
      {!questions &&
        <Row> <Col>
          {noQuestionMessage}
        </Col>
        </Row>
      }
      <Row>
        <Col>
          <RecordButton record={record} />
        </Col>
        <Col>
          <SubmitButton requestSolution={submit} />
        </Col>
      </Row>
    </Container>
  );
}

export default QuestionPage;