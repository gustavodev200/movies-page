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

import { AiFillStar, AiOutlineStar, AiFillPlayCircle } from "react-icons/ai";

const MainContent = ({ titleMovie, film_img, overview }) => {
  return (
    <Content>
      <FirstContent>
        <TitleText>
          <h1>{titleMovie}</h1>
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
          <p>{overview}</p>
        </Description>
        <TrailerMovie>
          <AiFillPlayCircle color="#b912129d" fontSize={80} />
        </TrailerMovie>
      </FirstContent>
      <CoverTheMovie>
        <img src={`https://image.tmdb.org/t/p/original/${film_img}`} />
        {/* <img src={theMovie} alt="Capa Homem Aranha" /> */}
      </CoverTheMovie>
    </Content>
  );
};

export default MainContent;
