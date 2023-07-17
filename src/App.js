import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import Header from "./Header";
import StartPage from "./pages/StartPage";
import ListeningPage from "./pages/ListeningPage";
import QuestionPage from "./pages/QuestionPage/QuestionPage";
import SolutionPage from "./pages/SolutionPage";

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
  const [solution, setSolution] = useState(null);

  /**Function to access microphone and start recording */
  function record() {
    console.debug("inside record");
    setIsRecording(true);
    setQuestions(null);
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
    setSolution({timeline:"", cost:null, details:""});
    setQuestions(null);
  }

  function restart () {
    console.debug("inside restart");
    setQuestions(null);
    setSolution(null);
  }


  return (
    <Container className="App d-grid gap-5">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
      {!isRecording && !questions && !solution &&
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
          <QuestionPage submit={requestSolution} record={record} />
        </Col>
      }

      {(solution != null) &&
        <Col>
          <SolutionPage
          timeline={solution.timeline}
          cost={solution.cost}
          details={solution.details}
          restart={restart}
          />
        </Col>
      }
      </Row>
    </Container>
  );
}

export default App;
