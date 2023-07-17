import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import Header from "./Header";
import RoutesList from "./routes-nav/RoutesList";


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
  function record() {
    console.debug("inside record");
  }

  /**Function to stop access microphone and send off recording to API */
  function stopRecord() {
    console.debug("inside stopRecord");
  }

  /**Function to request sales solution from QBuilder API */
  function requestSolution() {
    console.debug("inside requestSolution");
  }

  function restart() {
    console.debug("inside restart");
  }


  return (
    <Container className="App d-grid gap-5">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <RoutesList
            record={record}
            stopRecord={stopRecord}
            submit={requestSolution}
            restart={restart}
            solution={{ solution: "test" }}
            questions={["questions"]} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
