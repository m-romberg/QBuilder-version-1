import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './RecordButton.css';

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
function RecordButton({ record }) {
  console.debug("inside RecordButton");
  return (
    <Container className="RecordButton" >
      <Row>
        <Col>
          <Link to="/assistant/listening"  onClick={record}>
          <Button
            className="RecordButton Button rounded-circle"
            variant="success"
            >
            Start Assistant
          </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default RecordButton;