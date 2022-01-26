import React, { useState } from "react";

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

const MainContent = ({ movie, trailerKey, trailerError }) => {
  return (
    <Content>
      <FirstContent>
        <TitleText>
          <h1>{movie.title}</h1>
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
          <p>{movie.overview}</p>
        </Description>
        {trailerKey !== "<empty string>" ? (
          <TrailerMovie>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </TrailerMovie>
        ) : (
          <p>{trailerError}</p>
        )}
      </FirstContent>
      <CoverTheMovie>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
      </CoverTheMovie>
    </Content>
  );
};

export default MainContent;
