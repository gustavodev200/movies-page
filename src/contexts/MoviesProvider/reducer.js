import * as types from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.MOVIES_SUCCESS: {
      console.log(action.type);
      return { ...state, movies: action.payload, loading: false };
    }
    case types.MOVIES_LOADING: {
      console.log(action.type);
      return { ...state, loading: true };
    }
    case types.MOVIES_VALUE_INPUT: {
        console.log(action.payload);
        return { ...state, searchMovie: action.payload };
    }
  }

  return { ...state };
};
