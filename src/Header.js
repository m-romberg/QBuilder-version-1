import { Container, Row, Col } from "react-bootstrap";
import './Header.css';

/**
 * Header
 *
 * QBuilder Header
 *
 * props:
 *    - none
 *
 * state:
 *    - none
 *
 * App => Header
 */
function Header() {
  return (
    <Container className="Header">
      <Row>
        <Col>
        <text>
          QBuilder
        </text>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;