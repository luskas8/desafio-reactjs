import React, { useState } from "react";
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
  const marginDefaultValue = 70;
  const { theme } = useSelector((state: Store) => state.themeReducer);
  const dispatch = useDispatch();
  const [hoverMargin, setHoverMargin] = useState(marginDefaultValue);

  const ThemeChenagerContainer = styled.div`
    width: 80px;
    height: 80px;

    position: fixed;
    top: 50px;
    right: 0;

    & > button {
      cursor: pointer;

      border: 3px solid ${theme === "DARK" ? purpleScale1.dark : shadow.light};
      border-right: 0px;

      margin-left: ${hoverMargin}%;

      width: 100%;
      height: 100%;

      color: ${yellow.dark};

      background: ${theme === "DARK" ? purpleScale2.dark : lineInColor.dark};

      border-radius: 25px 0 0 25px;

      padding: 0 15px;

      display: flex;
      justify-content: center;
      align-items: center;
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
    <ThemeChenagerContainer onMouseOver={() => {setHoverMargin(0)}} onMouseLeave={() => setHoverMargin(marginDefaultValue)}>
      <button onClick={onChangerClick}>
        <WiMoonAltThirdQuarter size={25} />
      </button>
    </ThemeChenagerContainer>
  );
}
