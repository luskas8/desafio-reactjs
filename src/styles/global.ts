import styled from 'styled-components';

import { font, bg, lineInColor } from './colors';

interface ThemeProp {
    theme: string;
}

export const AppContainer = styled.div<ThemeProp>`
position: relative;
    background: ${(props) => props.theme === "DARK" ? bg.dark : bg.light};

    color: ${(props) => props.theme === "DARK" ? font.dark : font.light};
    font: 400 1.4rem 'Roboto', 'sans-serif';
`;

export const Input = styled.input<ThemeProp>`
    color: ${(props) => props.theme === "DARK" ? font.dark : font.light};
    border: 1px solid ${(props) => props.theme === "DARK" ? lineInColor.dark : lineInColor.light};
`;