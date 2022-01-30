import MainContent from "../MainContent";
import { Container } from "./container";
import { ContentStyle } from "./styles";
import React, { useEffect, useRef, useState } from "react";
import { DivInput, GetList, ListMovies, NavbarStyle } from "./navbar_styles";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { API_BASE, API_KEY } from "../../api/Tmdb";
import { FlatList, MovieImgStyle, InfoMovies } from "./movies_row.js";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { GlobalApp } from "../../templates/App/style";
import bg_default from "../../img/bg_spider.svg";
import { CgMenuLeft } from "react-icons/cg";
import useComponentVisibility from "../../hooks/UseComponentVisibility";

const ContentPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [moviesState, setMoviesState] = useState([]);
  const [movieArray, setMovieArray] = useState([]);
  const [movieError, setMovieError] = useState("");
  const [movieTrailer, setMovieTrailer] = useState("");
  const input = useRef("");
  const [menuMobile, setMobile] = useState(window.screen.width);
  const [removeList, setRemoveList] = useState("flex");
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisibility(false);
  // const [loading, setLoading] = useState(true);

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

  const searchOneMovie = async (id) => {
    const movie = await axios.get(
      `${API_BASE}/movie/${id}?api_key=${API_KEY}&language=pt-BR`
    );
    const data = movie.data;

    const movietrailer = await axios
      .get(`${API_BASE}/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`)
      .then(
        (res) => setMovieTrailer(res.data.results[0].key),
        setMovieArray(data)
      )
      .catch((err) => setMovieError("Trailer Indisponível!"));
  };

  const movieBG = () => {
    if (movieArray.backdrop_path === undefined) {
      return bg_default;
    } else if (movieArray.backdrop_path === null) {
      return bg_default;
    } else {
      return `https://image.tmdb.org/t/p/original/${movieArray.backdrop_path}`;
    }
  };

  

  useEffect(() => {
    console.log(menuMobile)
  }, [menuMobile])

  useEffect(() => {
    // handleCloseList();
    movieSearch();
  }, [inputValue]);

  return (
    <GlobalApp bg={movieBG()}>
      <ContentStyle>
        <Container>
          <NavbarStyle>
              <nav>
                <ul>
                  <li>
                    <a>Movies GL</a>
                  </li>
                </ul>
                <GetList>
                  <DivInput>
                    <input
                      type="search"
                      placeholder="Search movies"
                      ref={input}
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value)
                        setIsComponentVisible(true)
                      }}
                    />
                    <a>
                      <FiSearch cursor="pointer" fontSize={18} />
                    </a>
                  </DivInput>
                  {isComponentVisible && (
                    <ListMovies ref={ref}>
                      {moviesState.map((item, key) => (
                        <Router>
                          <Link
                            to={`/${item.id}`}
                            onClick={() => {
                              searchOneMovie(item.id);
                            }}
                          >
                            <FlatList key={item.id} onClick={()=> setIsComponentVisible(false)}>
                              <MovieImgStyle>
                                <img
                                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                                />
                              </MovieImgStyle>
                              <InfoMovies>
                                {item.title.length >= 16 ? (
                                  <h2 title={item.title}>
                                    {item.title.slice(0, 16)}...
                                  </h2>
                                ) : (
                                  <h2>{item.title}</h2>
                                )}
                                <p>{item.vote_average}</p>
                              </InfoMovies>
                            </FlatList>
                          </Link>
                        </Router>
                      ))}
                    </ListMovies>
                  )}
                </GetList>
              </nav>
          </NavbarStyle>
          <MainContent
            movie={movieArray}
            trailerKey={movieTrailer}
            trailerError={movieError}
          />
        </Container>
      </ContentStyle>
    </GlobalApp>
  );
};

export default ContentPage;
