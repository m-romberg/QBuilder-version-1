import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import RecordButton from "./buttons/RecordButton";
import StopButton from "./buttons/StopButton";

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
  }

  /**Function to stop access microphone and send off recording */
  function stopRecord () {
    console.debug("inside stopRecord");
  }

  return (
    <Container className="App">
      <Row>
        <Col>
        <RecordButton record={record}/>
        <StopButton stooRecord={stopRecord}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
