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
          <p>QBuilder</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;