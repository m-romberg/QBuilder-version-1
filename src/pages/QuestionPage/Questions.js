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
  const topThreeQuestions = ["This is question 1. This is question 1. This is question 1. This is question 1.", "This is question 2.", "This is question 3"];

  return (
    <Container className="Questions d-grid gap-3">
      <Row>
        {!topThreeQuestions &&
          <Col>
            <h2>No More Questions.</h2>
          </Col>
        }
        {topThreeQuestions &&
          <Col>
            <h2>Top 3 Questions</h2>
          </Col>
        }
      </Row>
      <Row>
        <Col></Col>
        {topThreeQuestions && <Col className="Questions-list">
          <ol>
            {topThreeQuestions.map((q, i) => <li key={i}>{q}</li>)}
          </ol>
        </Col>
        }
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Questions;