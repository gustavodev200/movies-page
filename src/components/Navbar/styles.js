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
    flex-direction: column;
    overflow: scroll;

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
          &:hover {
            border-bottom: 2px solid #fff;
          }
        }
      }
    }
  }
`;

export const DivInput = styled.div`
  display: flex;
  align-items: center;
`;

export const InputStyle = styled.div`
  width: 15rem;
  height: 2rem;

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
export const List = styled.div``;
