import React, { useEffect, useContext } from "react";
import { DivInput, NavbarStyle } from "./styles";
import { FiSearch } from "react-icons/fi";
import { PageMovieContext } from "../../contexts/MoviesProvider/context";
import { valueInputMovie } from "../../contexts/MoviesProvider/actions";

const Navbar = () => {

  const moviesContextApp = useContext(PageMovieContext);
  const { movieState, moviesDispatch } = moviesContextApp;

  useEffect(()=> {
    valueInputMovie(moviesDispatch)
  },[moviesDispatch])

  return (
    <NavbarStyle>
      <nav>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">MOVIES</a>
          </li>
          <li>
            <a href="#">TV SHOWS</a>
          </li>
          <li>
            <a href="#">GUIDES</a>
          </li>
        </ul>
        <DivInput>
          <input
            type="search"
            placeholder="Search movies"
            value={movieState.movieInput}
            onChange={() => valueInputMovie(moviesDispatch)}
          />
          <a>
            <FiSearch cursor="pointer" />
          </a>
        </DivInput>
        {console.log(movieState, moviesDispatch)}
      </nav>
    </NavbarStyle>
  );
};

export default Navbar;
