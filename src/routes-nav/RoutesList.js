import { Routes, Route, Navigate } from 'react-router-dom';
import StartPage from "../pages/StartPage";
import ListeningPage from "../pages/ListeningPage";
import QuestionPage from "../pages/QuestionPage/QuestionPage";
import SolutionPage from "../pages/SolutionPage";

/**Component for RoutesList
 *
 * Routes to all site paths
 *
 * Props:
 *  - record
 *  - stopRecord
 *  - questions
 *  - submit
 *  - solution
 *  - restart
 *
 * State:none
 *
 * App -> RoutesList -> { StartPage, ListeningPage, QuestionPage, SolutionPage}
 *
 * connects links to components:
 *  - StartPage /start
 *  - ListeningPage /listening
 *  - QuestionPage /questions
 *  - Solutionpage /solution
 *  - handles not found path back to /start page
 * */
function RoutesList({ record, stopRecord, questions, submit, solution, restart }) {
  return (
    <Routes>
      <Route
        path="/assistant/start"
        element={<StartPage record={record} />}>
      </Route>
      <Route
        path="/assistant/listening"
        element={<ListeningPage stopRecord={stopRecord} />}>
      </Route>
      <Route
        path="/assistant/questions"
        element={<QuestionPage
          questions={questions}
          record={record}
          submit={submit} />}>
      </Route>
      <Route
        path="/assistant/solution"
        element={<SolutionPage
          timeline={solution.timeline}
          cost={solution.cost}
          details={solution.details}
          restart={restart} />}>
      </Route>
      <Route path="*" element={<Navigate to="/assistant/start" />} />
    </Routes>
  );
}

export default RoutesList;