import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import Header from "./Header";
import StartPage from "./pages/StartPage";

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
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <StartPage record={record} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
