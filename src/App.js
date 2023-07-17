import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import Header from "./Header";
import StartPage from "./pages/StartPage";
import ListeningPage from "./pages/ListeningPage";
import QuestionPage from "./pages/QuestionPage/QuestionPage";

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

  const [isRecording, setIsRecording] = useState(false);
  const [questions, setQuestions] = useState(null);

  /**Function to access microphone and start recording */
  function record() {
    console.debug("inside record");
    setIsRecording(true);
  }

  /**Function to stop access microphone and send off recording to API */
  function stopRecord() {
    console.debug("inside stopRecord");
    setIsRecording(false);
    setQuestions(["Sample Questions"]);
  }

  /**Function to request sales solution from QBuilder API */
  function requestSolution() {
    console.debug("inside requestSolution");
  }


  return (
    <Container className="App d-grid gap-5">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
      {!isRecording && !questions &&
        <Col>
           <StartPage record={record} />
        </Col>
      }

      {isRecording &&
        <Col>
          <ListeningPage stopRecord={stopRecord} />
        </Col>
      }

      {(questions != null) &&
        <Col>
          <QuestionPage submit={requestSolution} />
        </Col>
      }
      </Row>
    </Container>
  );
}

export default App;
