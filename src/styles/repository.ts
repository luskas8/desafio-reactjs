import styled from 'styled-components';
import { colors } from './colors';

export const RepositoryContainer = styled.div`
    position: relative;
    width: 600px;
    height: 300px;

    border: 2px solid ${colors.dark['line-in-color']};

    margin-top: 30px;
    padding: 15px 20px;

    & > footer {
        position: absolute;
        bottom: 20px;

        & > a {
            text-decoration: none;
            color: ${colors.dark.blue};

            display: flex;
            justify-content: center;
            aligm-items: center;
            gap: 8px;

            &:hover {
                color: ${colors.dark.green};
            }
        }

    }
`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${colors.dark['title-blue']};
    font: 700 1.6rem "Roboto", "sans-serif";
`;

export const Main = styled.main`
    margin-top: 25px;
    width: 100%;

    & > p {
        font-size: 1.3rem;
        ont-weight: 300;
        
        width: 100%;
        max-height: 100px;
        overflow: hidden;
    }
`;