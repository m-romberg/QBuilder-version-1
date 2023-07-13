import { Container, Row, Col } from "react-bootstrap";
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

  const topThreeQuestions = questions?.slice(0, 3);

  return (
    <Container className="Questions">
    <Row>
    <Col>
    <h2>Questions</h2>
    </Col>
    </Row>
      <Row>
        <Col>
        <ol>
        {topThreeQuestions &&
          topThreeQuestions.map((q,i) => <li key={i}>{q}</li>)}
        </ol>
        </Col>
      </Row>
    </Container>
  );
}

export default Questions;