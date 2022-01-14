import React from "react";

import {
  Content,
  FirstContent,
  TitleText,
  StarsInfo,
  Stars,
  ButtonTrailer,
  Description,
  TrailerMovie,
  CoverTheMovie,
} from "./style";

const MainContent = () => {
  return (
    <Content>
      <FirstContent>
        <TitleText>TITLE FILME</TitleText>
        <StarsInfo>
          <Stars>Stars</Stars>
          <ButtonTrailer>Watch Trailer</ButtonTrailer>
        </StarsInfo>
        <Description>
          Depois de ser picado por uma aranha geneticamente modificada em uma
          demonstração científica, o jovem nerd Peter Parker
        </Description>
        <TrailerMovie>Trailer</TrailerMovie>
      </FirstContent>
      <CoverTheMovie>Card</CoverTheMovie>
    </Content>
  );
};

export default MainContent;
