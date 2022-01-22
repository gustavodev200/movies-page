import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";

const MoviesRow = ({ titles, vote_average, movie_img }) => {
  return (
    <FlatList>
      <MovieImgStyle>
        <img src={`https://image.tmdb.org/t/p/original/${movie_img}`} />
      </MovieImgStyle>
      <InfoMovies>
        {titles.length >= 14 ? <h2 title={titles}>{titles.slice(0, 14)}...</h2> : <h2>{titles}</h2>}
        <p>{vote_average}</p>
      </InfoMovies>
    </FlatList>
  );
};

const FlatList = styled.div`
  width: 100%;
  height: 5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #ffffff;
  margin: 0.2rem 0;
  cursor: pointer;


  h2 {
    font-size: .8rem;
    color: #000000;
  }

  p {
    margin: 0;
    color: #000000;
  }
`;

const MovieImgStyle = styled.div`
margin: 0 .5rem;
  
  img{
    border-radius: .2rem;
    height: 4.5rem;
  }
`;
const InfoMovies = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export default MoviesRow;
