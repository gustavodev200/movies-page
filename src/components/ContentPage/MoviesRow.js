
import styled from "styled-components";

export const FlatList = styled.div`
  width: 100%;
  height: 5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #ffffff;
  margin: 0.2rem 0;
  cursor: pointer;

  h2 {
    font-size: 0.8rem;
    color: #000000;
  }

  p {
    margin: 0;
    color: #000000;
  }
`;

export const MovieImgStyle = styled.div`
  margin: 0 0.5rem;

  img {
    border-radius: 0.2rem;
    height: 4.5rem;
  }
`;
export const InfoMovies = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

