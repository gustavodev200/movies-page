import React, { useEffect, useState } from "react";

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
import { useParams, useLocation } from "react-router-dom";
import ContentPage from "../ContentPage";
// import MoviesRow from "../MoviesRow";
import axios from "axios";
import { API_BASE, API_KEY } from "../../api/Tmdb";

const MainContent = ({movie, trailerKey}) => {
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
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailerKey}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {/* <TrailerMovie>
          <AiFillPlayCircle color="#b912129d" fontSize={80} />
        </TrailerMovie> */}
      </FirstContent>
      <CoverTheMovie>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
      </CoverTheMovie>
    </Content>
  );
};

export default MainContent;
