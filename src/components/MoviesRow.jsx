import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainContent from "./MainContent";

const MoviesRow = ({ titles, vote_average, movie_img, id, overview }) => {
  return (
    <Router>
      <Link to={`/movie=${id}`}>
        <FlatList key={id}>
          <MovieImgStyle>
            <img src={`https://image.tmdb.org/t/p/original/${movie_img}`} />
          </MovieImgStyle>
          <InfoMovies>
            {titles.length >= 16 ? (
              <h2 title={titles}>{titles.slice(0, 16)}...</h2>
            ) : (
              <h2>{titles}</h2>
            )}
            <p>{vote_average}</p>
          </InfoMovies>
        </FlatList>
      </Link>

      <Switch>
        <Route path={`/movie=${id}`}>
          <MainContent titleMovie={titles} film_img={movie_img} overview={overview}/>
        </Route>
      </Switch>
    </Router>
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
    font-size: 0.8rem;
    color: #000000;
  }

  p {
    margin: 0;
    color: #000000;
  }
`;

const MovieImgStyle = styled.div`
  margin: 0 0.5rem;

  img {
    border-radius: 0.2rem;
    height: 4.5rem;
  }
`;
const InfoMovies = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export default MoviesRow;
