import { Link } from 'react-router-dom';
import styled from "styled-components";

import { lineInColor, menu, shadow, font, titleBlue, del, blue, bg } from './colors';

interface ThemeProp {
  theme: string;
}

export const DevItem = styled.div<ThemeProp>`
  width: 1500px;

  padding: 25px 0;
  border: 1px solid ${(props) => props.theme === "DARK" ? lineInColor.dark : menu.dark}};

  background: ${(props) => props.theme === "DARK" ? menu.dark : bg.light};

  -webkit-box-shadow: 0px 0px 16px -5px ${(props) => props.theme === "DARK" ? shadow.dark : shadow.light};
  -moz-box-shadow: 0px 0px 16px -5px ${(props) => props.theme === "DARK" ? shadow.dark : shadow.light};
  box-shadow: 0px 0px 16px -5px ${(props) => props.theme === "DARK" ? shadow.dark : shadow.light};
  
  padding: 20px 12px;

  border-bottom-left-radius: ${Math.random() * (25 - 12) + 5}px;
  border-top-right-radius: ${Math.random() * (25 - 5) + 5}px;

  &:nth-child(odd) {
    border-top-left-radius: ${Math.random() * (25 - 8) + 5}px;
    border-bottom-right-radius: ${Math.random() * (25 - 10) + 5}px;

    border-bottom-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  &:not(:first-child) {
    margin-top: 30px;
  }

  @media only screen and (max-width: 1515.99px) {
    width: 80%;
  }

  @media only screen and (max-width: 800.99px) {
    width: 80%;
  }
`;
  
export const StyledLink = styled(Link)<ThemeProp>`
  color: ${(props) => props.theme === "DARK" ? font.dark : menu.light};

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;

  text-decoration: none;
  
  @media only screen and (max-width: 770.99px) {
    display: grid;
    grid-template-areas "avatar"
                        "info";             
  }
`;

export const ImageBlock = styled.div<ThemeProp>`
  width: 120px;
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 420.99px) {
    grid-area: avatar
  }

  & > img {
    -webkit-box-shadow: 0px 0px 16px -5px ${(props) => props.theme === "DARK" ? shadow.dark : shadow.light};
    -moz-box-shadow: 0px 0px 16px -5px ${(props) => props.theme === "DARK" ? shadow.dark : shadow.light};
    box-shadow: 0px 0px 16px -5px ${(props) => props.theme === "DARK" ? shadow.dark : shadow.light};

    width: 100%;

    border: 1px solid ${(props) => props.theme === "DARK" ? lineInColor.dark : menu.light};
    border-radius: 50%;
  }
`;

export const Title = styled.div<ThemeProp>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    font: 700 1.4rem 'Roboto', 'sans-serif';
    color: ${(props) => props.theme === "DARK" ? titleBlue.dark : titleBlue.light};
  }
`;

export const TitleSpan = styled.span<ThemeProp>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  color: ${(props) => props.theme === "DARK" ? titleBlue.dark : titleBlue.light};
  background: ${(props) => props.theme === "DARK" ? menu.dark : bg.light};

  border: 1px solid ${(props) => props.theme === "DARK" ? lineInColor.dark : bg.dark};
  border-radius: 15px;

  padding: 8px 10px;

  font-weight: bold;
  font-size: 1rem;
`;

export const Infos = styled.div`
  max-width: 1000px;
  padding-left: 15px;

  @media only screen and (max-width: 420.99px) {
    grid-area: info
  }

  @media only screen and (max-width: 800.99px) {
    max-width: 320px;
  }

  & > p {
    margin-top: 12px;
    font: 300 1rem 'Roboto', 'sans-serif';
  }
`;

export const ButtonBlock = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteButton = styled.button<ThemeProp>`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme === "DARK" ? font.dark : menu.light};
  background: ${(props) => props.theme === "DARK" ? bg.dark : bg.light};
  border: 1px solid ${(props) => props.theme === "DARK" ? lineInColor.dark : lineInColor.light};
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme === "DARK" ? blue.dark : blue.light};
  }

  &:active {
    border-color: ${(props) => props.theme === "DARK" ? del.dark : del.light};
    color: ${(props) => props.theme === "DARK" ? del.dark : del.light};
    background: ${(props) => props.theme === "DARK" ? menu.dark : bg.light};
  }
`;

export const DevContainer = styled.div`
  max-width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;