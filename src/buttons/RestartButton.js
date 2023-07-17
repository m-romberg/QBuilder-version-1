import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
        <Link to="/assistant/start" onClick={restart}>
          <Button
            className="RestartButton Button rounded-circle"
            variant="secondary"
            >
            Back to Home
          </Button>
        </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default RestartButton;