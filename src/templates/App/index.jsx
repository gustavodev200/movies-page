import React from "react";
import ContentPage from "../../components/ContentPage";
import MovieProvider from "../../contexts";
import { GlobalApp } from "./style";

const App = () => {
  return (
    <MovieProvider>
        <ContentPage />
    </MovieProvider>
  );
};

export default App;
