import styled from "styled-components";

export const GlobalApp = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.bg});
    background-size: cover;
`;