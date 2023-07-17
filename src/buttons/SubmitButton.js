import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './SubmitButton.css';

/**
 * SubmitButton
 *
 * Requests a solution from the QBuilder API
 *
 * props:
 *    - requestSolution: fn to call API for sales solution
 *
 * state:
 *    - none
 *
 * QuestionPage => SubmitButton
 */

function SubmitButton({ requestSolution }) {
  console.debug("inside SubmitButton");
  return (
    <Container className="SubmitButton">
      <Row>
        <Col>
        <Link to="/assistant/solution" onClick={requestSolution}>
          <Button
          className="SubmitButton-button"
          >
            Request Sales Solution
          </Button>
        </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default SubmitButton;