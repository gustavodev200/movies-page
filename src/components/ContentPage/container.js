import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 78%;
  height: 90%;
  margin: 3rem 10rem;

  @media screen and (max-width: 700px) {
    margin: 0;
  }
`;
