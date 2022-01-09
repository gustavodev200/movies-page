import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/globalStyle";
import App from "./templates/App";


ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
