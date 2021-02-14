import styled from "styled-components";

import { bg, lineInColor, menu } from "./colors";

interface ThemeProp {
  theme: string;
}

interface AsideProps extends ThemeProp {
  isOpen: boolean;
}

export const DevContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Aside = styled.aside<AsideProps>`
  width: 320px;
  height: 100vh;

  background: ${(props) => (props.theme === "DARK" ? menu.dark : menu.light)};
  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 970.99px) {
    width: 100%;
    margin-left: ${(props) => (props.isOpen ? "0" : "-100%")};
    z-index: 99;

    transition: margin 0.2s ease-out;
    -webkit-transition: margin 0.2s ease-out;
    -moz-transition: margin 0.2s ease-out;
    -ms-transition: margin 0.2s ease-out;
    -o-transition: margin 0.2s ease-out;
  }
`;

export const ToggleMenu = styled.div<AsideProps>`
  background-color: ${(props) =>
    props.theme === "DARK" ? lineInColor.dark : menu.light};
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 40px;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  padding: 2px 2px 2px 3px;
  border-radius: 5px;
  cursor: pointer;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;

  transition: right 0.2s ease-out;
  -webkit-transition: right 0.2s ease-out;
  -moz-transition: right 0.2s ease-out;
  -ms-transition: right 0.2s ease-out;
  -o-transition: right 0.2s ease-out;

  & > .line {
    width: 100%;
    height: 3px;
    border-radius: 5px;
    background-color: #fff;
    transition: transform 0.2s ease-out;
    -webkit-transition: transform 0.2s ease-out;
    -moz-transition: transform 0.2s ease-out;
    -ms-transition: transform 0.2s ease-out;
    -o-transition: transform 0.2s ease-out;
  }

  @media only screen and (max-width: 970.99px) {
    display: flex;
  }

  ${(props) =>
    props.isOpen
      ? `
      & > .line1 {
        background-color: #fff;
        transform: scale(0.9) rotateZ(-45deg) translate(-8px, 6px);
      }
    
      & > .line2 {
        display: none;
      }
    
      & > .line3 {
        background-color: #fff;
        transform: scale(0.9) rotateZ(45deg) translate(-8px, -6px);
      }
    `
      : `
        z-index: 99;
        right: calc(100% - 60px);
      `}
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
    font: 400 1.6rem "Roboto", "sans-serif";
  }

  & > h2 {
    color: #929292;
    font: 400 1.4rem "Roboto", "sans-serif";
  }

  & > p {
    max-width: 260px;

    margin-top: 15px;

    color: #ccc;
    font: 300 1rem "Roboto", "sans-serif";
  }
`;

export const Footer = styled.footer`
  & > h3 {
    color: #fff;
    font: 300 1rem "Roboto", "sans-serif";
  }
`;
