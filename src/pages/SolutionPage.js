import { Container, Row, Col } from "react-bootstrap";
import './SolutionPage.css';

/**
 * SolutionPage
 *
 * Displays sales solution with timeline, cost, and additional details
 *
 * props:
 *    - timeline: string, "6-8 months"
 *    - cost: integer, 100000
 *    - details: string, "Additional details. "
 *
 * state:
 *    - none
 * SalesAssistant => SolutionPage
 */
function SolutionPage() {
  return (
    <Container className="SolutionPage">
      <Row>
        <Col>
        </Col>
      </Row>
    </Container>
  );
}

export default SolutionPage;