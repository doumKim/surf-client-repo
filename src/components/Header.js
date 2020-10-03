import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { Link, withRouter } from "react-router-dom";
import { withResizeDetector } from "react-resize-detector";

import HambergerModal from "./Modal/HambergerModal";
import AuthModal from "./Modal/Auth/AuthModal";
import { getUserData, signOut } from "../modules/SignIn";

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

const UserMenu = styled.div`
  display: ${props => (props.open === true ? "flex" : "none")};
  position: fixed;
  top: 80px;
  float: right;
  right: 7%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: display 0.2s ease-out;

  padding: 1rem;
  width: 160px;
  background: #f1f3f5;
  z-index: 6;
  border: none;
  border-radius: 3px;

  box-shadow: #adb5bd 0px 1px 5px;

  @media (max-width: 3000px) {
    right: 5.4%;
  }
  @media (max-width: 2500px) {
    right: 6%;
  }
  @media (max-width: 2000px) {
    right: 7.5%;
  }
  @media (max-width: 1500px) {
    right: 9%;
  }
  @media (max-width: 1450px) {
    right: 9.6%;
  }
  @media (max-width: 1400px) {
    right: 10%;
  }
  @media (max-width: 1366px) {
    opacity: 0;
  }
`;
const MenuLink = styled(Link)`
  font-size: 1rem;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: #343a40;
  padding-bottom: 8px;
  margin-top: 1rem;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;

const Header = withRouter(({ width, history }) => {
  const { data, isSignIn } = useSelector(state => state.signIn);
  const dispatch = useDispatch();

  const [modalState, setModalState] = useState({
    // 모달이 현재 보여지고 있는가
    isModalVisible: false,
    // 현재 보여지고 있는 모달이 '로그인' 모달인가
    isModalLogin: true,
  });

  const [userMenu, setUserMenu] = useState(false);

  useEffect(() => {
    if (isSignIn && !data) {
      dispatch(getUserData());
    }
  }, [isSignIn]);

  const showModal = isModalLogin => {
    setModalState(prev => ({ ...prev, isModalVisible: true, isModalLogin }));
  };

  const hideModal = () => {
    setModalState(prev => ({ ...prev, isModalVisible: false }));
  };

  const handleImageLoadFailure = e => {
    e.target.src = "/images/default_user.png";
  };

  return (
    <>
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
              {isSignIn && data ? (
                <>
                  <HeaderUser onClick={() => setUserMenu(!userMenu)}>
                    {data.avatar_url ? (
                      <img
                        alt="user-avatar"
                        src={data.avatar_url}
                        onError={handleImageLoadFailure}
                        style={{
                          cursor: "pointer",
                          width: "40px",
                          height: "40px",
                          border: "none",
                          borderRadius: "50%",
                          marginRight: "1rem",
                        }}
                      />
                    ) : (
                      <img
                        alt="user-avatar"
                        src={"/images/default_user.png"}
                        style={{
                          cursor: "pointer",
                          width: "40px",
                          height: "40px",
                          border: "none",
                          borderRadius: "50%",
                          marginRight: "1rem",
                        }}
                      />
                    )}

                    <HeaderUserText style={{ color: "#212529" }}>
                      <span>{data.username}</span>
                    </HeaderUserText>
                  </HeaderUser>
                  <HeaderUser>
                    <HeaderUserText
                      onClick={() => {
                        console.log("clicked");
                        setModalState(prevState => ({
                          ...prevState,
                          isModalLogin: true,
                        }));
                        dispatch(signOut());
                      }}
                    >
                      Log Out
                    </HeaderUserText>
                  </HeaderUser>
                </>
              ) : (
                <>
                  <HeaderUser onClick={() => showModal(true)}>
                    <HeaderUserText>Log In</HeaderUserText>
                  </HeaderUser>
                  <HeaderUser onClick={() => showModal(false)}>
                    <HeaderUserText>Sign Up</HeaderUserText>
                  </HeaderUser>
                </>
              )}
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
                <HambergerSpan
                  isOpen={modalState.isModalVisible}
                ></HambergerSpan>
                <HambergerSpan
                  isOpen={modalState.isModalVisible}
                ></HambergerSpan>
                <HambergerSpan
                  isOpen={modalState.isModalVisible}
                ></HambergerSpan>
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
      {isSignIn && data && (
        <UserMenu open={userMenu}>
          <MenuLink to="/user/mypage">서퍼 정보</MenuLink>
          <MenuLink to="/wave/new">파도 일으키기</MenuLink>
          <MenuLink to="/user/likes">좋아요 목록</MenuLink>
          <MenuLink
            onClick={e => {
              e.preventDefault();
              dispatch(signOut);
              setModalState(prevState => ({
                ...prevState,
                isModalLogin: true,
              }));
            }}
            to="/"
          >
            로그아웃
          </MenuLink>
        </UserMenu>
      )}
    </>
  );
});

export default withResizeDetector(Header);
