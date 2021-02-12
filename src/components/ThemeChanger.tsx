import React from "react";
import { WiMoonAltNew } from "react-icons/wi";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../store/dev/actions";
import { Store } from "../store/dev/types";

import { font, lineInColor, menu, titleBlue } from "../styles/colors";

export default function ThemeChanger() {
  const { theme } = useSelector((state: Store) => state.themeReducer);
  const dispatch = useDispatch();

  const ThemeChenagerContainer = styled.div`
    width: 150px;
    height: 80px;

    position: fixed;
    top: 50px;
    right: 0;


    & > button {
      border: 2px solid ${theme === "DARK" ? lineInColor.dark : lineInColor.light};
      border-right: 0px;

      margin-left: 60%;

      width: 100%;
      height: 100%;

      color: ${theme === "DARK" ? font.dark : titleBlue.light};
      background: ${theme === "DARK" ? menu.dark : font.dark};

      border-radius: 25px 0 0 25px;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;

      transition: margin ease-in-out .25s;

      &:hover {
        margin-left: 0;
      }
    }
  `;

  const onChangerClick = () => {
    if (theme === "DARK") {
      dispatch(lightTheme());
    } else {
      dispatch(darkTheme());
    }
  };

  return (
    <ThemeChenagerContainer>
      <button onClick={onChangerClick}>
        <WiMoonAltNew size={25} />
        {theme === "DARK" ? "Tema claro" : "Tema escuro"}
      </button>
    </ThemeChenagerContainer>
  );
}
