import styled from 'styled-components';
import { colors } from './colors';
import { Input } from './global';

export const LandingContainer = styled.div`
    width: 100%;
    min-height: 100vh;

    background: ${colors.dark.bg};
`;

export const Header = styled.header`
    background: ${colors.dark.menu};
    padding: 35px 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.form`
    width: 260px;
    height: 55px;
    position: relative;

    & > button {
        position: absolute;
        right: -50px;
        top: 0;

        color: ${colors.dark.blue};
        background: ${colors.dark.bg};
        border: 1px solid ${colors.dark['line-in-color']};
        border-bottom-right-radius: 12px;
	    border-top-right-radius: 12px;
        display: flex;

        width: 50px;
        height: 55px;
        justify-content: center;
        align-items: center;

        &:active {
            color: ${colors.dark['title-blue']};
            border: 1px solid ${colors.dark.blue};
            background: ${colors.dark.menu};
        }
    }
`;

export const DevInput = styled(Input)`
    width: 100%;
    height: 100%;

    background: var(--color-bg-dark);
    border: 1px solid ${colors.dark['line-in-color']};
    border-bottom-left-radius: 12px;
	border-top-left-radius: 12px;

    padding: 5px 20px;

    font-size: 1rem;
`;

export const Main = styled.main`
    padding-top: 35px;

    border-top: 1.3px solid ${colors.dark['title-blue']};
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;