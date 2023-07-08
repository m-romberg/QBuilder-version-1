import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import RecordButton from "./buttons/RecordButton";
import StopButton from "./buttons/StopButton";
import SubmitButton from "./buttons/SubmitButton";

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

  /**Function to stop access microphone and send off recording to API */
  function stopRecord () {
    console.debug("inside stopRecord");
  }

  /**Function to request sales solution from QBuilder API */
  function requestSolution () {
    console.debug("inside requestSolution");
  }


  return (
    <Container className="App">
      <Row>
        <Col>
        <RecordButton record={record}/>
        <StopButton stopRecord={stopRecord}/>
        <SubmitButton requestSolution={requestSolution} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
