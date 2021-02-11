import { Link } from 'react-router-dom';
import styled from "styled-components";
import { colors } from './colors';

export const DevItem = styled.div`
  width: 80%;

  padding: 25px 0;
  border: 0.1px solid ${colors.dark['line-in-color']};

  background: ${colors.dark.menu};

  -webkit-box-shadow: 0px 0px 16px -5px ${colors.dark.shadow};
  -moz-box-shadow: 0px 0px 16px -5px ${colors.dark.shadow};
  box-shadow: 0px 0px 16px -5px ${colors.dark.shadow};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

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
`;
  
export const StyledLink = styled(Link)`
  color: ${colors.dark.font};

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;

  text-decoration: none;
`;

export const ImageBlock = styled.div`
  width: 120px;
  height: 120px;

  & > img {
    -webkit-box-shadow: 0px 0px 16px -5px ${colors.dark.shadow};
    -moz-box-shadow: 0px 0px 16px -5px ${colors.dark.shadow};
    box-shadow: 0px 0px 16px -5px ${colors.dark.shadow};

    width: 100%;

    border: 2px solid ${colors.dark['line-in-color']};
    border-radius: 50%;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    font: 700 1.4rem 'Roboto', 'sans-serif';
    color: ${colors.dark['title-blue']};
  }
`;

export const TitleSpan = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  color: ${colors.dark['title-blue']};
  background: ${colors.dark.menu};

  border: 1px solid ${colors.dark['line-in-color']};
  border-radius: 15px;

  padding: 8px 10px;

  font-weight: bold;
  font-size: 1rem;
`;

export const Infos = styled.div`
  min-width: 1000px;
  padding-left: 15px;

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

export const DeleteButton = styled.button`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${colors.dark.font};
  background: ${colors.dark.bg};
  border: 1px solid ${colors.dark['line-in-color']};
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    border: 2px solid ${colors.dark.blue};
  }
  
  &:hover, ${DevItem} {
    border: 2px solid ${colors.dark.blue};
  }

  &:active {
    border-color: ${colors.dark.delete};
    color: ${colors.dark.delete};
    background: ${colors.dark.menu};
  }
`;