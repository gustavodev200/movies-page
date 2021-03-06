import styled from "styled-components";

export const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const FirstContent = styled.main`
  margin-top: 2.5rem;
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

export const TitleText = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
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
  padding: 0.1rem 1rem;
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
  max-width: 40rem;
  p {
    color: white;
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

export const TrailerMovie = styled.div`
  width: 60%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 1rem;
  iframe {
    width: 100%;
    border-radius: 3rem;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    iframe {
      width: 100%;
      height:100%;
      border-radius: 1rem;
    }
  }
`;

export const CoverTheMovie = styled.div`
  width: 50%;
  height: 60%;
  margin-bottom: 7rem;

  img {
    border-radius: 3rem;
    width: 85%;
    -webkit-box-shadow: -12px 10px 10px -1px rgba(0, 0, 0, 0.89);
    box-shadow: -12px 10px 10px -1px rgba(0, 0, 0, 0.89);
  }

  @media screen and (max-width: 700px) {
    position: block;
    width: 90%;
    height: 100%;
    margin: 0;
    margin-top: 3rem;
  }
`;
