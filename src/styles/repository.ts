import styled from "styled-components";

import { lineInColor, blue, green, titleBlue, menu } from "./colors";

interface ThemeProp {
  theme: string;
}

export const RepositoryContainer = styled.div<ThemeProp>`
  position: relative;
  width: 600px;
  height: 300px;

  border: 2px solid
    ${(props) =>
      props.theme === "DARK" ? lineInColor.dark : lineInColor.light};

  margin-top: 30px;
  padding: 15px 20px;

  & > footer {
    position: absolute;
    bottom: 20px;

    & > a {
      text-decoration: none;
      color: ${(props) => (props.theme === "DARK" ? blue.dark : menu.light)};

      display: flex;
      justify-content: center;
      aligm-items: center;
      gap: 8px;

      &:hover {
        color: ${(props) =>
          props.theme === "DARK" ? green.dark : green.light};
      }
    }
  }

  @media only screen and (max-width: 1010.99px) {
    width: calc(100% - 10%);
  }

  @media only screen and (max-width: 650.99px) {
    max-width: ;
  }
`;

export const Title = styled.h1<ThemeProp>`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${(props) =>
    props.theme === "DARK" ? titleBlue.dark : titleBlue.light};
  font: 700 1.6rem "Roboto", "sans-serif";
`;

export const Main = styled.main<ThemeProp>`
  margin-top: 25px;
  width: 100%;

  & > p {
    font-size: 1.3rem;
    font-weight: 300;

    color: ${(props) => props.theme === "LIGHT" && menu.light};

    width: 100%;
    max-height: 100px;
    overflow: hidden;
  }
`;
