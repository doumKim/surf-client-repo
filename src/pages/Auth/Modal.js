import React, { useState } from "react";
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: #343a40;

  animation-duration: 0.25s;
  animation-timing-function: linear;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

export default function Modal({ appear, disappear }) {
  // 초기값은 login
  const [linkLogin, setLogin] = useState(true);
  const [linkJoin, setJoin] = useState(false);

  const handleLoginSubmit = data => {
    // login api here
    console.log(data);
  };
  const handleSocial = e => {
    // social login api here
    e.preventDefault();
    console.log("social!");
  };
  const changeJoin = () => {
    setJoin(true);
    setLogin(false);
  };
  const changeLogin = () => {
    setJoin(false);
    setLogin(true);
  };
  const close = () => {
    disappear();
  };

  if (!appear) {
    return null;
  } else {
    if (linkLogin) {
      return (
        <DarkBack>
          <Login
            close={close}
            changeForm={changeJoin}
            LoginUp={handleLoginSubmit}
            SocialLoginUp={handleSocial}
          />
        </DarkBack>
      );
    } else if (linkJoin) {
      return (
        <DarkBack>
          <Join
            close={close}
            changeForm={changeLogin}
            JoinUp={handleLoginSubmit}
            SocialJoinUp={handleSocial}
          />
        </DarkBack>
      );
    }
  }
}
