import { Container, Row, Col } from "react-bootstrap";
import './SolutionPage.css';
import SolutionPageWidget from "./SolutionPageWidget";
import RestartButton from "../buttons/RestartButton";

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
function SolutionPage({ timeline, cost, details, restart }) {
  return (
    <Container className="SolutionPage">
      <Row>
        <h2>Based on the sales chat provided, this is the proposed sales solution</h2>
      </Row>
      <Row className="SolutionPage-timeline">
        <Col>
        <SolutionPageWidget title={"timeline"} value={"6-8 months"} />
        </Col>
      </Row>
      <Row className="SolutionPage-cost">
        <Col>
        <SolutionPageWidget title={"cost"} value={"$1,000,000"} />
        </Col>
      </Row>
      <Row className="SolutionPage-details">
        <Col>
        <SolutionPageWidget title={"details"} value={"Expensive."} />
        </Col>
      </Row>
      <Row>
      <Col>
          <RestartButton restart={restart} />
        </Col>
      </Row>
    </Container>
  );
}

export default SolutionPage;