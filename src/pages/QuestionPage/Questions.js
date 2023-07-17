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

  // const topThreeQuestions = questions?.slice(0, 3);
  const topThreeQuestions = ["What are the GPU needs? Please be specific as possible.",
   "What is the budget range? One will be suggested at the end.",
   "What is the time frame? "];

  return (
    <Container className="Questions d-grid gap-3">
      <Row>
        {!topThreeQuestions &&
          <Col>
            <h2>No More Questions.</h2>
          </Col>
        }
        {topThreeQuestions &&
          <Col className="Questions-header">
            <h3>
            Based on the conversation so far... these are the most important questions to ask
            </h3>
          </Col>
        }
      </Row>
      <Row>
        <Col sm={1}></Col>
        {topThreeQuestions && <Col className="Questions-list">
          <ol>
            {topThreeQuestions.map((q, i) => <li key={i}>{q}</li>)}
          </ol>
        </Col>
        }
        <Col sm={1}></Col>
      </Row>
    </Container>
  );
}

export default Questions;