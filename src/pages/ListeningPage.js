import { Container, Row, Col } from "react-bootstrap";
import './ListeningPage.css';
import StopButton from "../buttons/StopButton";
/**
 * ListeningPage
 *
 * Prompts the user that it is recording.
 * Renders button to stop and submit recording to Whisper API.
 *
 * props:
 *    - stopRecord: fn to stop recording and send to whisper API
 *
 * state:
 *    - none
 *
 * SalesAssistant => ListeningPage => StopButton
 */
function ListeningPage({ stopRecord }) {
  console.debug("inside ListeningPage");

  const prompt = 'Click below to stop the recording and request assistance.';

  return (
    <Container className="ListeningPage d-grid gap-5">
      <Row className="ListeningPage ListeningPage-prompt p-2">
        <Col> {prompt} </Col>
      </Row>
      <Row className="ListeningPage ListeningPage-btns p-2">
        <Col> <StopButton stopRecord={stopRecord} /> </Col>
      </Row>
    </Container>
  );
}

export default ListeningPage;