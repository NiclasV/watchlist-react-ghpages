import styled, { css } from 'styled-components';
import bgImage from '../images/netflixbg2.jpg';
import bgProfile from '../images/bgprofile.jpg';

const div = styled.div `
    min-height: 300px;
    background-size: 100%;
    background-position: center;
    border-bottom: 7px solid #2196f3;
    ${props =>
        props.primary &&
        css`
            background-image: url(${bgImage});
    `
    };
    ${props =>
        props.profile &&
        css`
            background-image: url(${bgProfile});
            z-index: -100;
        ` 
    };
`;

export default div;