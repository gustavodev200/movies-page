import React from "react";
import MoviesProvider from '../../contexts/MoviesProvider'
import ContentPage from "../../components/ContentPage";
import { GlobalApp } from "./style";

const App = () => {
  return (
    <MoviesProvider>
      <GlobalApp>
        <ContentPage />
      </GlobalApp>
    </MoviesProvider>
  );
};

export default App;
