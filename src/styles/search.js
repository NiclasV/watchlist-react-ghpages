import styled, { css } from 'styled-components';
import bgImage from '../images/netflixbg2.jpg';

const div = styled.div `
    min-height: 35vh;
    background-size: 100%;
    background-position: center;
    border-bottom: 7px solid #2196f3;
    ${props =>
        props.primary &&
        css`
            background-image: url(${bgImage});
    `};
`;

export default div;