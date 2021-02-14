import React from "react";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styled from "styled-components";

interface LoaderProps {
  spinnerType?: any;
  time?: number;
  text?: string;
  color?: string;
}

export default function Loading({ spinnerType = "Puff", time, text = "Isso pode demorar um pouco...", color = "#00BFFF"}: LoaderProps) {
  const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;

    & > h1 {
      text-align: center;
    }
`;

  return (
    <Container>
      <Loader type={spinnerType} timeout={time} color={color} height={250} width={250} />
      <h1>{text}</h1>
    </Container>
  );
}
