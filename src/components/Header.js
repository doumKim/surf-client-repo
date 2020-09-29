import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { withResizeDetector } from "react-resize-detector";

import HambergerModal from "./Modal/HambergerModal";
import AuthModal from "./Modal/Auth/AuthModal";

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  min-width: 300px;
  background-color: #228be6;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
`;

const HomePageLink = styled(Link)`
  display: flex;
  width: 100%;
`;

const HeaderTitle = styled.div`
  width: 109px;
  height: 48px;
  font-family: Helvetica;
  font-size: 40px;
  font-weight: bold;
  color: #a5d8ff;
  margin-left: 32px;
`;

const HeaderLogo = styled.img`
  width: 80px;
  height: 80px;
`;

const HeaderFuncs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
  color: #a5d8ff;
`;

const HeaderUserText = styled.span`
  font-family: AppleSDGothicNeo;
  font-size: 22px;
  font-weight: bold;
  margin-right: 24px;
  cursor: pointer;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 30px;
`;

const HambergerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 40px;
  z-index: 5;
  cursor: pointer;
`;

const HambergerSpan = styled.span`
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background-color: ${props => (props.isOpen ? "#232323" : "#cdcdcd")};
  border-radius: 3px;

  z-index: 1;
  opacity: 1;
  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  transform: ${props =>
    props.isOpen ? "rotate(45deg) translate(-2px, -1px)" : null};

  :nth-of-type(2) {
    opacity: ${props => (props.isOpen ? 0 : 1)};
    transform: ${props =>
      props.isOpen ? "rotate(0deg) scale(0.2, 0.2)" : null};
  }

  :nth-of-type(3) {
    transform-origin: 0% 100%;
    transform: ${props =>
      props.isOpen ? "rotate(-45deg) translate(0, -1px)" : null};
  }
`;

const Header = ({ width }) => {
  // redux로 로그인 상태 확인 후 로그인 유뮤에 따라 헤너 내용을 다르게 보여줄 예정

  const [modalState, setModalState] = useState({
    // 모달이 현재 보여지고 있는가
    isModalVisible: false,
    // 현재 보여지고 있는 모달이 '로그인' 모달인가
    isModalLogin: true,
  });

  const showModal = isModalLogin => {
    setModalState(prev => ({ ...prev, isModalVisible: true, isModalLogin }));
  };

  const hideModal = () => {
    setModalState(prev => ({ ...prev, isModalVisible: false }));
  };

  return (
    <HeaderContainer>
      <HomePageLink to={"/"} style={{ justifyContent: "flex-start" }}>
        <HeaderTitle>SURF</HeaderTitle>
      </HomePageLink>
      <HomePageLink to={"/"} style={{ justifyContent: "center" }}>
        <HeaderLogo src="/images/surf_logo.png" />
      </HomePageLink>
      {width > 1366 ? (
        <>
          <HeaderFuncs>
            <HeaderSearch
              type="text"
              name="search"
              placeholder="Search for Wave"
            />
            <HeaderUser onClick={() => showModal(true)}>
              <HeaderUserText>Log In</HeaderUserText>
            </HeaderUser>
            <HeaderUser onClick={() => showModal(false)}>
              <HeaderUserText>Sign Up</HeaderUserText>
            </HeaderUser>
          </HeaderFuncs>
          <AuthModal
            showModal={showModal}
            hideModal={hideModal}
            modalState={modalState}
          />
        </>
      ) : (
        <>
          <MenuContainer>
            <HambergerIcon
              onClick={() =>
                modalState.isModalVisible
                  ? hideModal()
                  : showModal(modalState.isModalLogin)
              }
            >
              <HambergerSpan isOpen={modalState.isModalVisible}></HambergerSpan>
              <HambergerSpan isOpen={modalState.isModalVisible}></HambergerSpan>
              <HambergerSpan isOpen={modalState.isModalVisible}></HambergerSpan>
            </HambergerIcon>
          </MenuContainer>
          <HambergerModal
            showModal={showModal}
            hideModal={hideModal}
            modalState={modalState}
          />
        </>
      )}
    </HeaderContainer>
  );
};

export default withResizeDetector(Header);
