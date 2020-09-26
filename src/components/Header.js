import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

import Modal from "../pages/Auth/Modal";

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  min-width: 300px;
  background-color: #4bcffa;
`;

const HeaderTitle = styled.div`
  width: 109px;
  height: 48px;
  font-family: Helvetica;
  font-size: 40px;
  font-weight: bold;
  color: #575fcf;
  margin-left: 32px;
`;

const HeaderLogo = styled.img`
  width: 80px;
  height: 80px;
`;

const HeaderFuncs = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderSearch = styled.input`
  width: 212px;
  height: 35px;
  margin-right: 24px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.49);
  border: 0;
  padding: 0px 10px;
`;

const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #575fcf;
`;

const HeaderUserText = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 18px;
  font-weight: bold;
  margin-right: 24px;
  cursor: pointer;
`;

export default () => {
  const [modal, setModal] = useState({
    isVisible: false,
    loginPressed: true,
    isLoggedin: true,
  });

  const showModal = loginPressed => {
    setModal(prev => ({ ...prev, isVisible: true, loginPressed }));
  };

  const hideModal = () => {
    setModal(prev => ({ ...prev, isVisible: false }));
  };
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <HeaderTitle>SURF</HeaderTitle>
      </Link>
      <Link to={"/"}>
        <HeaderLogo src="/images/surf_logo.png" />
      </Link>
      <HeaderFuncs>
        <HeaderSearch type="text" name="search" placeholder="Search for Wave" />
        <HeaderUser>
          <HeaderUserText onClick={() => showModal(true)}>
            Log In
          </HeaderUserText>
        </HeaderUser>
        <HeaderUser>
          <HeaderUserText onClick={() => showModal(false)}>
            Sign Up
          </HeaderUserText>
        </HeaderUser>
      </HeaderFuncs>
      <Modal appear={showModal} disappear={hideModal} modalState={modal} />
    </HeaderContainer>
  );
};
