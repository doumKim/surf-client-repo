import React, { useState } from "react";
import styled from "@emotion/styled";
import { isEmail, isPassword } from "../../constants/AuthCheck";
import { size } from "../../constants/DiviceSize";
import { CloseOutlined } from "@ant-design/icons";
import { keyframes } from "@emotion/core";

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;
const JoinBox = styled.div`
  margin: 0 auto;
  background-color: #f8f9fa;
  border: none;
  border-radius: 5px;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
  width: 480px;
  height: 780px;
  padding: 3rem;

  // 반응형때 조절 해야 하는 부분
  @media (max-width: ${size.tablet}) {
    width: 100%;
    height: 100vh;
    padding: 5rem 1rem 0 2rem;
  }
`;

const JoinTitle = styled.div`
  display: inline-block;
  color: #343a40;
  margin-bottom: 1.5rem;
  font-size: 3.5rem;
  font-weight: 700;
  @media (max-width: ${size.tablet}) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

const JoinLabel = styled.p`
  color: #343a40;
  margin-bottom: 5px;
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 400;
  @media (max-width: ${size.tablet}) {
    font-size: 1rem;
    margin-bottom: 5px;
  }
`;
const JoinInput = styled.input`
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
    margin-bottom: 4px;
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
  color: #fff;
  background-color: #51cf66;
  
  border-radius: 6px;
  border: none;
  margin-top: 1.5rem;
  width: 32%;
  height: 40px;
  font-size: 1.2rem;
  font-weight: 500;

  @media (max-width: ${size.tablet}) {
    width: 80px
    margin-top: 2rem;
  }
`;

const SocialButton = styled.button`
  cursor: pointer;
  display: block;
  // color-set
  background-color: ${props => {
    const socials = ["kakao", "google", "naver", "submit"];
    const socialColors = ["#fcc419", "#fa5252", "#51cf66", "#ced4da"];
    return socialColors[socials.indexOf(props.social)];
  }};
  color: white;

  // outline
  border: none;
  border-radius: 6px;
  box-shadow: #ced4da 0 1px 4px;
  margin-top: 2.5rem;

  // responsive
  width: 120px;
  height: 60px;
  font-size: 1.2rem;
  font-weight: 600;

  @media (max-width: ${size.tablet}) {
    width: 28%;
  }
  @media (max-width: ${size.mobileL}) {
    font-size: 1.2rem;
  }
`;
const GotoLogin = styled.p`
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

export default function Join({ close, JoinUp, SocialJoinUp, changeForm }) {
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    isValidEmail: false,
    isValidPassword: false,
  });
  const {
    username,
    email,
    password,
    password2,
    isValidEmail,
    isValidPassword,
  } = authData;
  const pwCheck = () => {
    return authData.password === authData.password2;
  };
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
        isValidPassword: true,
      });
    } else {
      setAuthData({
        ...authData,
        password: e.target.value,
        isValidPassword: false,
      });
    }
  };
  const changeUsername = e => {
    setAuthData({
      ...authData,
      username: e.target.value,
    });
  };
  const changePW2 = e => {
    setAuthData({
      ...authData,
      password2: e.target.value,
    });
  };

  const joinSubmit = e => {
    e.preventDefault();
    const {
      email,
      password,
      username,
      password2,
      isValidEmail,
      isValidPassword,
    } = authData;
    if (email && password && username && password2) {
      if (isValidEmail && isValidPassword) {
        JoinUp(authData);
        setAuthData({
          username: "",
          email: "",
          password: "",
          password2: "",
          isValidEmail: false,
          isValidPassword: false,
        });
      } else {
        alert("🚨 이메일 또는 패스워드를 확인해주세요");
      }
    } else {
      alert("🚨 모든 빈칸을 작성해주세요");
    }
  };

  return (
    <JoinBox>
      <JoinTitle>Join</JoinTitle>
      <CloseOutlined
        style={{ display: "inline", float: "right", fontSize: "2rem" }}
        onClick={close}
      />
      <form onSubmit={joinSubmit}>
        <JoinLabel>닉네임(유저 이름)</JoinLabel>
        <JoinInput onChange={changeUsername} value={username} type="text" />
        <JoinLabel>이메일</JoinLabel>
        <JoinInput onChange={changeEmail} value={email} type="email" />
        {email ? (
          isValidEmail ? (
            <div style={{ color: "#a9e34b" }}>사용 가능한 이메일 입니다.</div>
          ) : (
            <div style={{ color: "#fa5252" }}>이메일 양식을 확인해주세요.</div>
          )
        ) : null}
        <JoinLabel>
          패스워드{" "}
          <span style={{ fontSize: "14px" }}>(8~10자리 영어, 숫자 조합)</span>
        </JoinLabel>
        <JoinInput onChange={changePW} value={password} type="password" />
        {password ? (
          isValidPassword ? (
            <div style={{ color: "#a9e34b" }}>사용 가능한 패스워드 입니다.</div>
          ) : (
            <div style={{ color: "#fa5252" }}>
              패스워드 양식을 확인해주세요.
            </div>
          )
        ) : null}
        <JoinLabel>패스워드 확인</JoinLabel>
        <JoinInput
          onChange={changePW2}
          value={authData.password2}
          type="password"
        />
        {password2 ? (
          pwCheck() ? (
            <div style={{ color: "#a9e34b" }}>패스워드가 일치합니다.</div>
          ) : (
            <div style={{ color: "#fa5252" }}>패스워드가 불일치 합니다.</div>
          )
        ) : null}
        <SubmitButton type="submit" onSubmit={joinSubmit}>
          회원가입
        </SubmitButton>
        <SocialWrap>
          <SocialButton onClick={SocialJoinUp} social="kakao">
            Kakao
          </SocialButton>
          <SocialButton social="google">Google</SocialButton>
          <SocialButton social="naver">Naver</SocialButton>
        </SocialWrap>
        <GotoLogin>
          이미 계정이 있으신가요? <span onClick={changeForm}>로그인</span>{" "}
          하러가기
        </GotoLogin>
      </form>
    </JoinBox>
  );
}
