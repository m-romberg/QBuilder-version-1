import { Container, Row, Col } from "react-bootstrap";
import './QuestionPage.css';
import Questions from './Questions';

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
  console.debug("Inside QuestionPage");
  return (
    <Container className="QuestionPage">
    <Row>
    <Col>
    <Questions />
    </Col>
    </Row>
    </Container>
  );
}

export default QuestionPage;