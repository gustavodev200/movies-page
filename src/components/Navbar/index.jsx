import React, { useEffect, useRef, useState } from "react";
import { DivInput, NavbarStyle } from "./styles";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [moviesState, setMoviesState] = useState([])
  const input = useRef(null);

  useEffect(() => {
    searchMovies()
  }, [inputValue]);

  // const [movie, setMovie] = useState({})

  // const movieSearch = async () => {
  //   await axios.post(`http://www.omdbapi.com/?s=${inputValue}&apikey=cb5a1b71`)
  //   .then(res => setMovie(res.data))
  // }

  async function searchMovies(value) {
    const movies = await axios.post(`http://www.omdbapi.com/?s=${value}&apikey=cb5a1b71`)
    await setMoviesState(movies.data.Search)
  }

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
            ref={input}
            value={inputValue}
            onChange={(e) => (
              setInputValue(e.target.value),
              searchMovies(inputValue)
            )}
          />
          <a>
            <FiSearch cursor="pointer" fontSize={18} />
          </a>
        </DivInput>
      </nav>
    </NavbarStyle>
  );
};

export default Navbar;
