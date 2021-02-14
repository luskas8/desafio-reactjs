import React from "react";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../store/dev/actions";
import { Store } from "../store/dev/types";

import {
  lineInColor,
  purpleScale2,
  purpleScale1,
  yellow,
  shadow,
} from "../styles/colors";

// interface

export default function ThemeChanger() {
  const { theme } = useSelector((state: Store) => state.themeReducer);
  const dispatch = useDispatch();

  const ThemeChenagerContainer = styled.div`
    width: 100px;
    height: 80px;

    position: fixed;
    top: 50px;
    right: 0;

    & > .changer-button {
      border: 3px solid ${theme === "DARK" ? purpleScale1.dark : shadow.light};
      border-right: 0px;

      width: 100%;
      height: 100%;

      margin-left: 80%;

      background: ${theme === "DARK" ? purpleScale2.dark : lineInColor.dark};

      border-radius: 25px 0 0 25px;

      padding: 0 15px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    & > .changer-button > button {
      cursor: pointer;

      width: 20px:
      heigth: 20px;
      padding: 12px;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${yellow.dark};
      background: ${theme !== "DARK" ? purpleScale1.dark : lineInColor.dark};
      border: none;
      border-radius: 100%;
    }

    &:hover > .changer-button {
      margin-left: 0;
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
      <div className="changer-button">
        <button onClick={onChangerClick}>
          <WiMoonAltThirdQuarter size={25} />
        </button>
      </div>
    </ThemeChenagerContainer>
  );
}
