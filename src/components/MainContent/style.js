import styled from "styled-components";

export const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FirstContent = styled.main`
  margin-top: 2.5rem;
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const TitleText = styled.div`
  display: flex;
  h1 {
    margin: 0;
    font-size: 2rem;
    color: white;
    margin-bottom: 1rem;
  }
`;

export const StarsInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Stars = styled.div`
  cursor: pointer;
`;

export const ButtonTrailer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .1rem 1rem;
  margin-left: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  border-radius: 50px;
  color: #fff;
  font-size: 0.8em;

  p {
    font-weight: bold;
    margin-left: 0.5rem;
  }
`;

export const Description = styled.div`
  max-width: 37rem;
  p {
    color: white;
    font-weight: 500;
    font-size: 1rem;
  }
`;

export const TrailerMovie = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  cursor: pointer;
`;

export const CoverTheMovie = styled.div`
  width: 50%;
  height: 60%;

  img {
    width: 85%;
  }
`;
