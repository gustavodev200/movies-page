import React from "react";
import styled from "styled-components";

const MoviesRow = ({ title, items }) => {
  return (
    <FlatList>
      <div>
        {items.results.length > 0 &&
          items.results.map((item, key) => (
            <img src={`https://image.tmdb.org/t/p/w100${item.poster_path}`} />
          ))}
      </div>
      <div>
        <h2>{title}</h2>
        <div>
          <p>2.9</p>
        </div>
      </div>
    </FlatList>
  );
};

const FlatList = styled.div`
  width: 15rem;
  height: 6rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
`;

export default MoviesRow;
