import { Container, Row, Col, Button } from "react-bootstrap";
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
          <Button onClick={stopRecord}>
            Stop Assistant
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default StopButton;