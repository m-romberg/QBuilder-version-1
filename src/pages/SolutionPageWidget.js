import { Container, Row, Col } from "react-bootstrap";
import './SolutionPageWidget.css';

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
        <Col xs={6}>
          <h3>{title.toUpperCase() + ":"}</h3>
        </Col>
        <Col  xs={6}>
          <p>{value}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default SolutionPageWidget;