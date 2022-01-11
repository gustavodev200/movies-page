//http://www.omdbapi.com/?apikey=cb5a1b71&
//http://www.omdbapi.com/?t=${searchMovie}&apikey=cb5a1b71

import axios from 'axios';
import * as types from './types';

export const valueInputMovie = (dispatch) => {
    dispatch({type: types.MOVIES_LOADING})

    return (e) => dispatch({type: types.MOVIES_VALUE_INPUT, payload: e.target.value})
}

export const loadMovie = async (dispatch) => {
    dispatch({type: types.MOVIES_LOADING});

    // const handleMovies = await axios.get(`http://www.omdbapi.com/?s=${searchMovie}&apikey=cb5a1b71`);
    // const movie = await handleMovies.json();
    // return () => dispatch({type: types.MOVIES_SUCCESS, payload: movie})
}