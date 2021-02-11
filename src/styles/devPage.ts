import styled from 'styled-components';
import { colors } from './colors';

export const DevContainer = styled.div`
    width: 100%;
    min-height: 100vh;
`;

export const Aside = styled.aside`
    width: 320px;
    height: 100vh;

    background: ${colors.dark.menu};
    position: fixed;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const ImageBlock = styled.div`
    width: 230px;
    height: 230px;

    & > img {
        width: 100%;

        border: 1.3px solid #ccc;
        border-radius: 50%;
    }
`;

export const Info = styled.div`
    & > h1 {
        color: #fff;
        font: 400 1.6rem 'Roboto', 'sans-serif';
    }

    & > h2 {
        color: #929292;
        font: 400 1.4rem 'Roboto', 'sans-serif';
    }

    & > p {
        max-width: 260px;
        
        margin-top: 15px;

        color: #ccc;
        font: 300 1rem 'Roboto', 'sans-serif';
    }
`;

export const Footer = styled.footer`
    & > h3 {
        color: #fff;
        font: 300 1rem 'Roboto', 'sans-serif';
    }
`