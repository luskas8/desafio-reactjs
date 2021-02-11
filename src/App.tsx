import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";

import Routes from "./Routes";
import { colors } from "./styles/colors";

import { AppContainer } from "./styles/global";
import "./styles/global.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return <AppContainer>{loading ? <Loading spinnerType="TailSpin" color={colors.dark.menu} text="Estamos ajeitando tudo para você..." /> : <Routes />}</AppContainer>;
}

export default App;
