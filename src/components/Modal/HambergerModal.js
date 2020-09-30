import React, { useRef } from "react";
import styled from "@emotion/styled";
import ModalBackground from "./ModalBackground";
import SideLoginController from "./Auth/SideLoginController";
import SideJoinController from "./Auth/SideJoinController";
import { deviceSize } from "../../constants/DiviceSize";
import SideAfterLoginController from "./Auth/SideAfterLoginController";

const Modal = styled.div`
  height: 100vh;
  width: 500px;
  background-color: #ededed;
  position: absolute;
  top: 0px;
  right: -500px;
  z-index: 4;

  @media ${deviceSize.tablet} {
    width: 100vw;
    right: -100vw;
  }

  transform-origin: 0% 0%;
  transform: ${props => (props.isOpen ? "translate(-100%, 0)" : null)};

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
`;

export default ({ showModal, hideModal, modalState }) => {
  let ref = useRef(null);

  const handleModalPress = e => {
    if (ref.current === e.target) {
      hideModal();
    }
  };

  return (
    <>
      {modalState.isModalVisible ? (
        <ModalBackground ref={ref} onClick={handleModalPress} />
      ) : null}
      {modalState.isSuccessLogin ? (
        <Modal isOpen={modalState.isModalVisible}>
          <SideAfterLoginController loginData={LOGIN_DATA} />
        </Modal>
      ) : (
        <Modal isOpen={modalState.isModalVisible}>
          {modalState.isModalLogin ? (
            <SideLoginController changeForm={() => showModal(false)} />
          ) : (
            <SideJoinController changeForm={() => showModal(true)} />
          )}
        </Modal>
      )}
    </>
  );
};

const LOGIN_DATA = {
  userId: 32,
  username: "Dobby",
  avatar_url:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYieM1wd1ScKyQR9OXbwnLkloYvD9QXNpbGA&usqp=CAU",
};
