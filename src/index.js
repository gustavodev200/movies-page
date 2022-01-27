import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/globalStyle";
import App from "./templates/App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/:id">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
