import { Container, Row, Col } from "react-bootstrap";
import './StartPage.css';

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
function StartPage() {
  console.debug("inside StartPage");
  return (
    <Container className="StartPage">
    <Row>
    <Col>Start page</Col>
    </Row>
    </Container>
  );
}

export default StartPage;