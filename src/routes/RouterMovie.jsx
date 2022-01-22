import React from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import MainContent from "../components/MainContent";

const RouterMovie = ({id}) => {
  return (
    <Router>
      <Switch>
        <Route path={`/${id}`}>
          <MainContent />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterMovie;
