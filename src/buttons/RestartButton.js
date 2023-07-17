import { Container, Row, Col, Button } from "react-bootstrap";
import './RestartButton.css';

/**
 * RecordButton
 *
 * Starts audio recording
 *
 * props:
 *    - record: fn to start recording audio
 *
 * state:
 *    - none
 *
 * {StartPage, QuestionsPage} => RecordButton
 */
function RestartButton({ restart }) {
  console.debug("inside RecordButton");
  return (
    <Container className="RestartButton" >
      <Row>
        <Col>
          <Button
            onClick={restart}
            className="RestartButton Button rounded-circle"
            variant="secondary"
            >
            Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default RestartButton;