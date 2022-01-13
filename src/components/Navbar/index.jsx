import React, { useContext, useEffect, useState } from "react";
import { DivInput, NavbarStyle } from "./styles";
import { FiSearch } from "react-icons/fi";
import { PageMovieContext } from "../../contexts/MoviesProvider/context";
import { valueInputMovie } from "../../contexts/MoviesProvider/actions";
import axios from "axios";

const Navbar = () => {
  const moviesContextApp = useContext(PageMovieContext);
  const { movieState, moviesDispatch } = moviesContextApp;
  console.log(movieState)

  // const [inputValue, setInputValue] = useState('')
  // const [movie, setMovie] = useState({})

  // const movieSearch = async () => {
  //   await axios.post(`http://www.omdbapi.com/?s=${inputValue}&apikey=cb5a1b71`)
  //   .then(res => setMovie(res.data))
  // }


  useEffect(() => {
    valueInputMovie(moviesDispatch);
  }, [moviesDispatch]);

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
            value={movieState}
            onChange={() => valueInputMovie(moviesDispatch)}
          />
          <a >
            <FiSearch cursor="pointer" fontSize={18}/>
          </a>
        </DivInput>
      </nav>
    </NavbarStyle>
  );
};

export default Navbar;
