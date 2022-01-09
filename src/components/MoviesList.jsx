import React from 'react';
import styled from 'styled-components';

const MoviesList = () => {
    return ( 
        <FlatList>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h2>Title</h2>
                <div>
                   <p>7.6/10</p> 
                </div>
            </div>
        </FlatList>
     );
}

const FlatList = styled.div`
    width: 15rem;
    height: 6rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
`;
 
export default MoviesList;