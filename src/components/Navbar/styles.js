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
          text-decoration: none;
          color: #fff;
          font-weight: bold;
        }
      }
    }
  }
`;

export const DivInput = styled.div`
  display: flex;
  align-items: center;
  width: 15rem;
  height: 2rem;

  border-radius: 2rem;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;

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
