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

import theMovie from "../../img/the_movie.svg";
import { AiFillStar, AiOutlineStar, AiFillPlayCircle } from "react-icons/ai";

const MainContent = () => {
  return (
    <Content>
      <FirstContent>
        <TitleText>
          <h1>Homem-Aranha: Sem Volta para Casa</h1>
        </TitleText>
        <StarsInfo>
          <Stars>
            <AiFillStar color="yellow" fontSize={25} />
            <AiFillStar color="yellow" fontSize={25} />
            <AiFillStar color="yellow" fontSize={25} />
            <AiFillStar color="yellow" fontSize={25} />
            <AiOutlineStar color="yellow" fontSize={25} />
          </Stars>
          <ButtonTrailer>
            <AiFillPlayCircle color="rgba(255,255,255, .5)" fontSize={35} />
            <p>Play</p>
          </ButtonTrailer>
        </StarsInfo>
        <Description>
          <p>
            Em Homem-Aranha: Sem Volta para Casa, Peter Parker (Tom Holland)
            precisará lidar com as consequências da sua identidade como o herói
            mais querido do mundo após ter sido revelada pela reportagem do
            Clarim Diário, com uma gravação feita por Mysterio (Jake Gyllenhaal)
            no filme anterior.
          </p>
        </Description>
        <TrailerMovie>
          <AiFillPlayCircle color="#b912129d" fontSize={80} />
        </TrailerMovie>
      </FirstContent>
      <CoverTheMovie>
        <img src={theMovie} alt="Capa Homem Aranha" />
      </CoverTheMovie>
    </Content>
  );
};

export default MainContent;
