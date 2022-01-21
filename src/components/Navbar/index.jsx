import React, { useEffect, useRef, useState } from "react";
import { DivInput, NavbarStyle } from "./styles";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { API_BASE, API_KEY } from "../../api/Tmdb";
import MoviesRow from "../MoviesRow";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [moviesState, setMoviesState] = useState([]);
  const input = useRef("");

  const movieSearch = async () => {
    const config = {
      method: "get",
      url: `${API_BASE}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${input.current.value}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then((res) => setMoviesState(res.data.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    movieSearch();
    console.log(input.current.value);
  }, [inputValue]);

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
            onChange={(e) => setInputValue(e.target.value)}
          />
          <a>
            <FiSearch cursor="pointer" fontSize={18} />
          </a>
        </DivInput>
        {moviesState.map((item, key) => (
          <MoviesRow title={item.title} popularity ={item.popularity}/>
        ))}
      </nav>
    </NavbarStyle>
  );
};

export default Navbar;
