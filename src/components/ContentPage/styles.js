import styled from "styled-components";

export const ContentStyle = styled.div`
  width: 92%;
  height: 90%;
  border-radius: 3rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 1);
  position: relative;
  z-index: 1;
  background: inherit;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(0, 0, 0, 0.2);
    filter: blur(5px);
  }
`;
