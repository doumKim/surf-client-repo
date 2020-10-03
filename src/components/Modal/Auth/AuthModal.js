import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Login from "./LoginController";
import Join from "./JoinController";
import ModalBackground from "../ModalBackground";

export default ({ showModal, hideModal, modalState }) => {
  let ref = useRef(null);
  const { isSignIn } = useSelector(state => state.signIn);

  const handleModalPress = e => {
    if (ref.current === e.target) {
      hideModal();
    }
  };

  useEffect(() => {
    if (isSignIn) {
      hideModal();
    }
  }, [isSignIn]);

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
