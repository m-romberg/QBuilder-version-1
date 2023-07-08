import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import RecordButton from "./buttons/RecordButton";

/**
 * App
 *
 * Calls header and route list
 * API calls made here.
 *
 * @returns
 *
 * App => {Header, RouteList}
 */
function App() {
  console.debug("inside app");

  /**Function to access microphone and start recording */
  function record () {
    console.debug("inside record");
    return ;
  }

  return (
    <Container className="App">
      <Row>
        <Col>
        <RecordButton record={record}>
        </RecordButton>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
