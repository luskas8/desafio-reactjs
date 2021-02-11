import styled from 'styled-components';
import { colors } from './colors';

export const RepositoryContainer = styled.div`
    position: relative;
    width: 600px;
    height: 300px;

    border: 2px solid ${colors.dark['line-in-color']};

    margin-top: 30px;
    padding: 15px 20px;
`;

export const Title = styled.h1`
    color: ${colors.dark['title-blue']};
    font: 700 1.6rem "Roboto", "sans-serif";
`;