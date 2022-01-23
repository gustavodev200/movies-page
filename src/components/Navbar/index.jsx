import React, { useEffect, useRef, useState } from "react";
import { DivInput, GetList, ListMovies, NavbarStyle } from "./styles";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { API_BASE, API_KEY } from "../../api/Tmdb";
import MoviesRow from "../MoviesRow";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [moviesState, setMoviesState] = useState([]);
  const input = useRef("");

  const movieSearch = async () => {
    const config = await {
      method: "get",
      url: `${API_BASE}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${input.current.value}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios(config)
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
        <GetList>
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
          {inputValue !== "" && (
            <ListMovies>
              {moviesState.map((item, key) => (
                <MoviesRow titles={item.title} vote_average={item.vote_average} movie_img={item.poster_path} id={item.id} overview={item.overview}/>
              ))}
            </ListMovies>
          )}
        </GetList>
      </nav>
    </NavbarStyle>
  );
};

export default Navbar;
