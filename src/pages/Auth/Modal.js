import React, { useRef } from "react";
import styled from "@emotion/styled";
import Login from "./LoginPresenter";
import Join from "./JoinPresenter";
import { keyframes } from "@emotion/core";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const DarkBack = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);

  animation-duration: 0.25s;
  animation-timing-function: linear;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

export default function Modal({ appear, disappear, modalState }) {
  let ref = useRef(null);

  const handleLoginSubmit = data => {
    // login api here
    console.log(data);
  };
  const handleSocial = e => {
    // social login api here
    e.preventDefault();
    console.log("social!");
  };

  const handleModalPress = e => {
    if (ref.current === e.target) {
      disappear();
    }
  };

  if (!modalState.isVisible) {
    return null;
  } else {
    if (modalState.loginPressed) {
      return (
        <DarkBack ref={ref} onClick={handleModalPress}>
          <Login
            onClick={null}
            close={disappear}
            changeForm={() => appear(false)}
            LoginUp={handleLoginSubmit}
            SocialLoginUp={handleSocial}
          />
        </DarkBack>
      );
    } else {
      return (
        <DarkBack ref={ref} onClick={handleModalPress}>
          <Join
            close={disappear}
            changeForm={() => appear(true)}
            JoinUp={handleLoginSubmit}
            SocialJoinUp={handleSocial}
          />
        </DarkBack>
      );
    }
  }
}
