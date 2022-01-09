import React, { useContext, useEffect, useRef, useState } from "react";
import { DivInput, NavbarStyle } from "./styles";
import { FiSearch } from "react-icons/fi";
import { PageMovieContext } from "../../contexts/MoviesProvider/context";
import MoviesList from "../MoviesList";

const Navbar = () => {
  const [valueInput, setValueInput] = useState("");
  const input = useRef(null);
  const moviesContextApp = useContext(PageMovieContext);
  const { movieState, moviesDispatch } = moviesContextApp;
  

  useEffect(() => {
    console.log(input.current.value)
  },[valueInput]);

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
            value={valueInput}
            ref={input}
            onChange={(e) => setValueInput(e.target.value)}
          />
          <a>
            <FiSearch cursor="pointer" />
          </a>
        </DivInput>
        {movieState && movieState.movies.map((movie) => <MoviesList />)}
      </nav>
    </NavbarStyle>
  );
};

export default Navbar;
