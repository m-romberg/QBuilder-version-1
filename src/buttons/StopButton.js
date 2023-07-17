import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './StopButton.css';

/**
 * StopButton
 *
 * Ends audio recording and sends audio file to API
 *
 * props:
 *    - stopRecord: fn to stop recording and send audio to API
 *
 * state:
 *    - none
 *
 * ListeningPage => StopButton
 */
function StopButton({ stopRecord }) {
  console.debug("inside StopButton");
  return (
    <Container className="StopButton">
      <Row>
        <Col>
        <Link to="/assistant/questions" onClick={stopRecord}>
          <Button
            className="StopButton Button rounded-circle"
            variant="danger">
            Stop Assistant
          </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default StopButton;