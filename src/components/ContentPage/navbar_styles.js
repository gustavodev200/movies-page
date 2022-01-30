import styled from "styled-components";

export const NavbarStyle = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin: 0 2.25rem 0 0;
        a {
          font-size: 1.5rem;
          text-decoration: none;
          color: #fff;
          font-weight: bold;
          font-family: "Comforter", cursive;
        }
      }
    }
  }
`;

export const DivInput = styled.div`
  display: flex;
  align-items: center;

  width: 95%;
  height: 2rem;
  margin-bottom: 0.5rem;

  border-radius: 2rem;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  display: flex;
  align-items: center;

  input {
    width: 85%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border-radius: 2rem;
    color: #fff;
    padding: 0 1rem;
    font-weight: 600;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InputStyle = styled.div``;

export const List = styled.div``;

export const GetList = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ListMovies = styled.div`
  position: absolute;
  top: 2rem;
  left: 0;
  display: ${(props) => props.closeList};
  flex-direction: column;
  width: 15rem;
  height: 50vh;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 700px) {
    width: 10rem;
  } 
`;
