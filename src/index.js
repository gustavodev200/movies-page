import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/globalStyle";
import App from "./templates/App";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import MainContent from "./components/MainContent";
import ContentPage from "./components/ContentPage";

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
