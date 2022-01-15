import React from "react";
import MainContent from "../MainContent";
import Navbar from "../Navbar";
import { Container } from "./container";
import { ContentStyle } from "./styles";

const ContentPage = () => {
  return (
    <ContentStyle>
      <Container>
        <Navbar />
        <MainContent />
      </Container>
    </ContentStyle>
  );
};

export default ContentPage;
