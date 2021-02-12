import styled from "styled-components";

import {
  bg,
  menu,
  blue,
  lineInColor,
  titleBlue,
} from "./colors";
import { Input } from "./global";

interface ThemeProp {
  theme: string;
}

export const LandingContainer = styled.div<ThemeProp>`
  width: 100%;
  min-height: 100vh;
  position: relative;

  background: ${(props) => (props.theme === "DARK" ? bg.dark : bg.light)};
`;

export const Header = styled.header<ThemeProp>`
  background: ${(props) => (props.theme === "DARK" ? menu.dark : menu.light)};
  padding: 35px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form<ThemeProp>`
  width: 260px;
  height: 55px;
  position: relative;

  & > button {
    position: absolute;
    right: -50px;
    top: 0;

    color: ${(props) => (props.theme === "DARK" ? blue.dark : blue.light)};
    background: ${bg.dark};
    border: 1px solid
      ${(props) =>
        props.theme === "DARK" ? lineInColor.dark : lineInColor.light};
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
    display: flex;

    width: 50px;
    height: 55px;
    justify-content: center;
    align-items: center;

    &:active {
      color: ${(props) =>
        props.theme === "DARK" ? titleBlue.dark : titleBlue.light};
      border: 1px solid
        ${(props) => (props.theme === "DARK" ? blue.dark : blue.light)};
      background: ${(props) =>
        props.theme === "DARK" ? menu.dark : menu.light};
    }
  }
`;

export const DevInput = styled(Input)<ThemeProp>`
  width: 100%;
  height: 100%;

  background: ${bg.dark};
  border: 1px solid
    ${(props) =>
      props.theme === "DARK" ? lineInColor.dark : lineInColor.light};
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;

  padding: 5px 20px;

  font-size: 1rem;
`;

export const Main = styled.main<ThemeProp>`
  padding-top: 35px;

  border-top: 1.3px solid
    ${(props) => (props.theme === "DARK" ? titleBlue.dark : titleBlue.light)};
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > .noDev {
    color: ${(props) => (props.theme !== "DARK" && '#000')} !important;
    z-index: 99;
  }
`;
