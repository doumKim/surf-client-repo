import React, { useState } from "react";
import Routes from "./Routes";
import GlobalStyles from "./constants/GlobalStyles";
import { Global } from "@emotion/core";
import Modal from "./pages/Auth/Modal";

const App = () => {
  const [modal, setModal] = useState(false);

  const makeVisible = () => {
    setModal(true);
  };
  const makeClose = () => {
    setModal(false);
  };
  return (
    <>
      <Global styles={GlobalStyles} />
      <Routes />
      <button onClick={makeVisible}>로그인</button>
      <Modal appear={modal} disappear={makeClose} />
    </>
  );
};

export default App;
