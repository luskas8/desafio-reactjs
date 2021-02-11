import React from "react";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Container } from "../styles/Loading";

export default function Loading() {
  return (
    <Container>
      <Loader type="Puff" color="#00BFFF" height={250} width={250} />
    </Container>
  );
}
