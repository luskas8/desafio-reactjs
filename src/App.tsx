import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Store } from "./store/dev/types";

import Routes from "./Routes";
import Loading from "./components/Loading";

import { AppContainer } from "./styles/global";
import "./styles/global.css";

import { font } from "./styles/colors";

function App() {
  const { theme } = useSelector((state: Store) => state.themeReducer);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <AppContainer theme={theme}>
      {loading ? (
        <Loading
          spinnerType="TailSpin"
          color={theme === "DARK" ? font.dark : font.light}
          text="Estamos ajeitando tudo para você..."
        />
      ) : (
        <Routes />
      )}
    </AppContainer>
  );
}

export default App;
