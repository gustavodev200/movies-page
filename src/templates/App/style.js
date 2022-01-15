import styled from "styled-components";
import BG from '../../img/bg_spider.svg'

export const GlobalApp = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-image: url(${BG});
    background-size: cover;
`;