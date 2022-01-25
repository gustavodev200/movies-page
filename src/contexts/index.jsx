import React, { useState } from 'react';
import { MovieContext } from './context';

const MovieProvider = ({children}) => {

    const [state, setState] = useState(false)

    return ( 
        <MovieContext.Provider value={[state, setState]}>
            {children}
        </MovieContext.Provider>
     );
}
 
export default MovieProvider;