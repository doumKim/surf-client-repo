import React, { useState } from "react";
import styled from "@emotion/styled";
import { withResizeDetector } from "react-resize-detector";

import { isEmail, isPassword } from "../../../constants/AuthCheck";
import Wave from "../../Wave/WaveContainer";

const JoinWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  background-color: #f8f9fa;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  padding: 0px 30px;
`;

const JoinBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
`;

const JoinTitle = styled.div`
  display: inline-block;
  color: #343a40;
  margin-bottom: 1.5rem;
  font-size: 3rem;
  font-weight: 700;
`;

const JoinLabel = styled.p`
  color: #343a40;
  margin-bottom: 5px;
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 400;
`;
const JoinInput = styled.input`
  width: 100%;
  height: 40px;
  background: #f1f3f5;
  border: 0.5px solid #dee2e6;
  border-radius: 3px;
  font-size: 1rem;
  margin-bottom: 4px;
`;
const SocialWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #adb5bd;
  align-items: center;
  margin-top: 48px;
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

  width: 31%;
  height: 50px;
  font-size: 1.2rem;
  font-weight: 600;
`;
const GotoLogin = styled.p`
  cursor: pointer;
  position: relative;
  text-align: right;

  font-size: 1rem;
  margin-top: 32px;
  color: #343a40;

  span {
    color: #2980b9;
    text-decoration: none;
  }
`;

const Join = ({ width, height, changeForm }) => {
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    isValidEmail: false,
    isValidPassword: false,
  });

  const checkPassword = () => {
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

  const changePassword = e => {
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

  const changePassword2 = e => {
    setAuthData({
      ...authData,
      password2: e.target.value,
    });
  };

  const changeUsername = e => {
    setAuthData({
      ...authData,
      username: e.target.value,
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
        // 서버에 회원가입 요청하는 API 호출
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

  const handleSocialJoin = service => {
    // 서버에 소셜 회원가입 요청하는 API 호출
    console.log(service);
  };

  return (
    <JoinWrapper>
      {width ? <Wave width={width} height={height} /> : null}
      <JoinBox>
        <JoinTitle>Join</JoinTitle>
        <form
          onSubmit={joinSubmit}
          style={{
            zIndex: 5,
            width: "100%",
          }}
        >
          <JoinLabel>닉네임(유저 이름)</JoinLabel>
          <JoinInput
            onChange={changeUsername}
            value={authData.username}
            type="text"
          />
          <JoinLabel>이메일</JoinLabel>
          <JoinInput
            onChange={changeEmail}
            value={authData.email}
            type="email"
          />
          {authData.email ? (
            authData.isValidEmail ? (
              <div style={{ color: "#a9e34b" }}>사용 가능한 이메일 입니다.</div>
            ) : (
              <div style={{ color: "#fa5252" }}>
                이메일 양식을 확인해주세요.
              </div>
            )
          ) : null}
          <JoinLabel>
            패스워드{" "}
            <span style={{ fontSize: "14px" }}>(8~10자리 영어, 숫자 조합)</span>
          </JoinLabel>
          <JoinInput
            onChange={changePassword}
            value={authData.password}
            type="password"
          />
          {authData.password ? (
            authData.isValidPassword ? (
              <div style={{ color: "#a9e34b" }}>
                사용 가능한 패스워드 입니다.
              </div>
            ) : (
              <div style={{ color: "#fa5252" }}>
                패스워드 양식을 확인해주세요.
              </div>
            )
          ) : null}
          <JoinLabel>패스워드 확인</JoinLabel>
          <JoinInput
            onChange={changePassword2}
            value={authData.password2}
            type="password"
          />
          {authData.password2 ? (
            checkPassword() ? (
              <div style={{ color: "#a9e34b" }}>패스워드가 일치합니다.</div>
            ) : (
              <div style={{ color: "#fa5252" }}>패스워드가 불일치 합니다.</div>
            )
          ) : null}
          <SubmitButton type="submit">회원가입</SubmitButton>
          <SocialWrap>
            <SocialButton
              onClick={() => handleSocialJoin("kakao")}
              social="kakao"
            >
              Kakao
            </SocialButton>
            <SocialButton
              onClick={() => handleSocialJoin("google")}
              social="google"
            >
              Google
            </SocialButton>
            <SocialButton
              onClick={() => handleSocialJoin("naver")}
              social="naver"
            >
              Naver
            </SocialButton>
          </SocialWrap>
          <GotoLogin>
            이미 계정이 있으신가요? <span onClick={changeForm}>로그인</span>{" "}
            하러가기
          </GotoLogin>
        </form>
      </JoinBox>
    </JoinWrapper>
  );
};

export default withResizeDetector(Join);
