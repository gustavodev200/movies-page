import React from 'react';
import P from 'prop-types'
import { useReducer } from 'react';
import { PageMovieContext } from './context';
import { data } from './data';
import { reducer } from './reducer';

const MoviesProvider = ({children}) => {

    const [movieState, moviesDispatch] = useReducer(reducer, data);

    return ( 
        <PageMovieContext.Provider value={{movieState, moviesDispatch}}>
            {children}
        </PageMovieContext.Provider>
     );
}

MoviesProvider.propTypes = {
    children: P.node.isRequired,
}
 
export default MoviesProvider;