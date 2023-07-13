import { Container, Row, Col } from "react-bootstrap";
import './StartPage.css';
import RecordButton from "../buttons/RecordButton";
/**
 * StartPage
 *
 * Prompts the user to start recording. Renders button to start listening.
 *
 * props:
 *    - record: fn to start recording
 *
 * state:
 *    - none
 *
 * SalesAssistant => StartPage => StartButton
 */
function StartPage({ record }) {
  console.debug("inside StartPage");

  const prompt = 'Click below to start the sales assistant and begin recording.';
  return (
    <Container className="StartPage d-grid gap-5">
      <Row className="StartPage StartPage-prompt p-2">
        <Col> {prompt} </Col>
      </Row>
      <Row className="StartPage StartPage-btns p-2">
        <Col> <RecordButton record={record} /></Col>
      </Row>
    </Container>
  );
}

export default StartPage;