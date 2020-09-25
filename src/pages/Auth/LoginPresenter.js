import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { isEmail, isPassword } from "../../constants/AuthCheck";
import { size } from "../../constants/DiviceSize";
import { CloseOutlined } from "@ant-design/icons";
import { keyframes } from "@emotion/core";

import Wave from "../../components/WaveContainer";

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;
const LoginBox = styled.div`
  position: relative;
  margin: 0 auto;
  background-color: #f8f9fa;
  border: none;
  border-radius: 5px;
  width: 480px;
  height: 640px;
  padding: 4rem;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  @media (max-width: ${size.tablet}) {
    width: 100%;
    height: 100%;
    padding: 8rem 1rem 0 2rem;
  }
`;
const LoginTitle = styled.div`
  display: inline-block;
  color: #343a40;
  margin-bottom: 1.6rem;
  font-size: 3.5rem;
  font-weight: 700;
  @media (max-width: ${size.tablet}) {
    font-size: 3rem;
  }
`;
const LoginLabel = styled.p`
  color: #343a40;
  margin-bottom: 5px;
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 400;

  @media (max-width: ${size.tablet}) {
    font-size: 1rem;
    margint-bottom: 5px;
  }
`;
const LoginInput = styled.input`
  width: 100%;
  height: 40px;
  background: #f1f3f5;
  border: 0.5px solid #dee2e6;
  border-radius: 3px;
  font-size: 1rem;
  margin-bottom: 4px;
  @media (max-width: ${size.tablet}) {
    width: 90%;
    height: 40px;
    font-size: 1.2rem;
    marignt-bottom: 4px;
  }
`;
const SocialWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #adb5bd;
  align-items: center;
  margin-top: 48px;
  @media (max-width: ${size.tablet}) {
    width: 90%;
  }
`;
const SubmitButton = styled.button`
  cursor: pointer;
  display: block;
  ${props => {
    if (props.fill === 2) {
      return `
        color: #343a40;
        background-color: #dee2e6;
      `;
    } else if (props.fill === 1) {
      return `
        color: #fff;
        background-color: #51cf66;
      `;
    }
  }}

  border-radius: 6px;
  border: none;
  margin-top: 1.5rem;
  width: 120px;
  height: 40px;
  font-size: 1.2rem;
  font-weight: 500;
  transition: background-color 0.5s ease;

  @media (max-width: ${size.tablet}) {
    width: 80px;
    margin-top: 2rem;
  }
`;
const SocialButton = styled.button`
  cursor: pointer;
  display: block;
  background-color: ${props => {
    const socials = ["kakao", "google", "facebook", "submit"];
    const socialColors = ["#fcc419", "#fa5252", "#4A68Ad", "#ced4da"];
    return socialColors[socials.indexOf(props.social)];
  }};
  color: white;

  border: none;
  border-radius: 6px;
  box-shadow: #ced4da 0 1px 4px;
  margin-top: 2.5rem;

  width: 31%;
  height: 60px;
  font-size: 1.2rem;
  font-weight: 600;

  @media (max-width: ${size.tablet}) {
    width: 28%;
  }
  @media (max-width: ${size.mobile}) {
    font-size: 1rem;
  }
`;
const GotoJoin = styled.p`
  cursor: pointer;
  position: relative;
  text-align: right;

  font-size: 1.2rem;
  margin-top: 32px;
  color: #343a40;
  span {
    color: #20c997;
    text-decoration: none;
  }
  @media (max-width: ${size.tablet}) {
    right: 10%;
  }
`;

export default function Login({ close, LoginUp, SocialLoginUp, changeForm }) {
  const [screenData, setScreenData] = useState({
    width: 0,
    height: 0,
  });

  const [authData, setAuthData] = useState({
    width: 0,
    height: 0,
    email: "",
    password: "",
    isValidEmail: false,
    isValidPW: false,
  });

  const loginRef = useRef(null);

  useEffect(() => {
    if (loginRef.current) {
      const height = loginRef.current.offsetHeight;
      const width = loginRef.current.offsetWidth;
      setScreenData({ height, width });
    }
  }, [loginRef]);

  const changeEmail = e => {
    if (isEmail(e.target.value)) {
      setAuthData({
        ...authData,
        email: e.target.value,
        isValidEmail: true,
      });
    } else {
      setAuthData({
        ...authData,
        email: e.target.value,
        isValidEmail: false,
      });
    }
  };
  const changePW = e => {
    if (isPassword(e.target.value)) {
      setAuthData({
        ...authData,
        password: e.target.value,
        isValidPW: true,
      });
    } else {
      setAuthData({
        ...authData,
        password: e.target.value,
        isValidPW: false,
      });
    }
  };

  const loginSubmit = e => {
    const { email, password, isValidEmail, isValidPW } = authData;
    e.preventDefault();
    if (email && password) {
      if (isValidEmail && isValidPW) {
        LoginUp(authData); //-> api 처리
        setAuthData({
          email: "",
          password: "",
          isValidEmail: false,
          isValidPW: false,
        });
      } else {
        alert("올바른 형식의 정보를 입력해주세요.");
      }
    } else {
      alert("로그인 정보를 다 입력해주세요.");
    }
  };

  return (
    <LoginBox ref={loginRef}>
      <LoginTitle>로그인</LoginTitle>
      <CloseOutlined
        style={{ display: "inline", float: "right", fontSize: "2rem" }}
        onClick={close}
      />

      <form onSubmit={loginSubmit}>
        <LoginLabel>이메일</LoginLabel>
        <LoginInput
          onChange={changeEmail}
          value={authData.email}
          type="email"
        />
        {authData.email
          ? !authData.isValidEmail && (
              <div style={{ color: "#fa5252" }}>
                이메일 양식을 확인해주세요.
              </div>
            )
          : null}
        <LoginLabel>
          패스워드{" "}
          <span style={{ fontSize: "14px" }}>(8~10자리 영어, 숫자 조합)</span>
        </LoginLabel>
        <LoginInput
          onChange={changePW}
          value={authData.password}
          type="password"
        />
        {authData.password
          ? !authData.isValidPW && (
              <div style={{ color: "#fa5252" }}>
                패스워드 양식을 확인해주세요.{" "}
              </div>
            )
          : null}
        <SubmitButton fill={authData.email ? (authData.password ? 1 : 2) : 2}>
          로그인
        </SubmitButton>
        <SocialWrap>
          <SocialButton onClick={SocialLoginUp} social="kakao">
            Kakao
          </SocialButton>
          <SocialButton social="google">Google</SocialButton>
          <SocialButton social="facebook">Facebook</SocialButton>
        </SocialWrap>
        <GotoJoin>
          계정이 없으신가요? <span onClick={changeForm}>회원가입</span> 하러가기
        </GotoJoin>
      </form>
      {screenData.width === 0 ? null : (
        <Wave width={screenData.width} height={screenData.height} />
      )}
    </LoginBox>
  );
}
