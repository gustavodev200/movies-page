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
import moviePadrao from "../../img/the_movie.svg";

const MainContent = ({ movie, trailerKey, trailerError }) => {
  return (
    <Content>
      <FirstContent>
        <TitleText>
          {movie.title !== undefined ? (
            <h1>{movie.title}</h1>
          ) : (
            <h1>Homem-Aranha: Sem Volta para Casa</h1>
          )}
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
          {movie.overview !== undefined ? (
            <p>{movie.overview}</p>
          ) : (
            <p>
              Em Homem-Aranha: Sem Volta para Casa, Peter Parker (Tom Holland)
              precisará lidar com as consequências da sua identidade como o
              herói mais querido do mundo após ter sido revelada pela reportagem
              do Clarim Diário, com uma gravação feita por Mysterio (Jake
              Gyllenhaal) no filme anterior.
            </p>
          )}
        </Description>
        {trailerKey !== '<empty string>' ? (
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
        {movie.poster_path !== undefined ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={`Movie: ${movie.title}`}
          />
        ) : (
          <img src={moviePadrao} alt="Homem-Aranha"/>
        )}
      </CoverTheMovie>
    </Content>
  );
};

export default MainContent;
