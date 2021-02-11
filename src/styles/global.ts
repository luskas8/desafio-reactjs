import styled from 'styled-components';
import { colors } from './colors';

export const AppContainer = styled.div`
    background: ${colors.dark.bg};

    color: ${colors.dark.font};
    font: 400 1.4rem 'Roboto', 'sans-serif';
`;

export const Input = styled.input`
    color: ${colors.dark.font};
    border: 1px solid ${colors.dark['line-in-color']};
`;