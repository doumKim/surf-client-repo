import React from "react";
import Routes from "./Routes";
import GlobalStyles from "./constants/GlobalStyles";
import { Global } from "@emotion/core";

const App = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Routes />
    </>
  );
};

export default App;
