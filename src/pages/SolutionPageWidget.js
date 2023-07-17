import { Container, Row, Col } from "react-bootstrap";
import './SolutionPage.css';

/**
 * SolutionPageWidget
 *
 * Visual component to diplay a title and text
 *
 * props:
 *    - title, string
 *    - value
 *
 * state:
 *    - none
 * SolutionPage => SolutionPageWidget
 */
function SolutionPageWidget({ title, value }) {
  return (
    <Container className="SolutionPageWidget">
      <Row>
        <Col>
          <h3>{title.toUpperCase()}</h3>
        </Col>
        <Col>
          <p>{value}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default SolutionPageWidget;