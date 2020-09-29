import React, { useRef } from "react";

import Login from "./LoginController";
import Join from "./JoinController";
import ModalBackground from "../ModalBackground";

export default ({ showModal, hideModal, modalState }) => {
  let ref = useRef(null);

  const handleModalPress = e => {
    if (ref.current === e.target) {
      hideModal();
    }
  };

  if (!modalState.isModalVisible) {
    return null;
  } else {
    if (modalState.isModalLogin) {
      return (
        <ModalBackground ref={ref} onClick={handleModalPress}>
          <Login hideModal={hideModal} changeForm={() => showModal(false)} />
        </ModalBackground>
      );
    } else {
      return (
        <ModalBackground ref={ref} onClick={handleModalPress}>
          <Join hideModal={hideModal} changeForm={() => showModal(true)} />
        </ModalBackground>
      );
    }
  }
};
