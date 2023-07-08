import { Container, Row, Col, Button } from "react-bootstrap";
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
          <Button onClick={requestSolution}>
            Request Sales Solution
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SubmitButton;