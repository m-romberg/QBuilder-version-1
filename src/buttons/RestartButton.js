import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './RestartButton.css';

/**
 * RestartButton
 *
 * Go back to home and calls fn that resets sale assistant
 *
 * props:
 *    - restart: fn to restart assistant
 *
 * state:
 *    - none
 *
 * {SolutionPage} => RestartButton
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