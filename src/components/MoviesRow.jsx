import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";

const MoviesRow = ({ title, popularity }) => {

  return (
    <FlatList>
      <h2>{title}</h2>
    </FlatList>
  );
};

const FlatList = styled.div`
  width: 20rem;
  height: 3rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  margin: 1rem 0;

  h2 {
    font-size: .5rem;
    color: #fff;
  }

  p {
    color: #fff
  }
`;

export default MoviesRow;
