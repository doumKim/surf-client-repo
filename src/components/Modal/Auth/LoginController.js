import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { isEmail, isPassword } from "../../../constants/AuthCheck";
import { CloseOutlined } from "@ant-design/icons";
import { keyframes } from "@emotion/core";
import { signIn } from "../../../modules/SignIn";

import Wave from "../../Wave/WaveContainer";
import { signIn } from "../../../modules/SignIn";
import { baseUrl } from "../../../constants/GlobalVariables";

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const Loginwrapper = styled.div`
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
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
`;

const LoginTitle = styled.div`
  display: inline-block;
  color: #343a40;
  margin-bottom: 1.6rem;
  font-size: 3.5rem;
  font-weight: 700;
`;
const LoginLabel = styled.p`
  color: #343a40;
  margin-bottom: 5px;
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 400;
`;
const LoginInput = styled.input`
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
`;
const SocialButton = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => {
    const socials = ["kakao", "google", "naver", "submit"];
    const socialColors = ["#fcc419", "#fa5252", "#51cf66", "#ced4da"];
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
`;
const GotoJoin = styled.p`
  cursor: pointer;
  position: relative;
  text-align: right;

  font-size: 1.2rem;
  margin-top: 32px;
  color: #343a40;
  span {
    color: #2980b9;
    text-decoration: none;
  }
`;

export default ({ hideModal, changeForm }) => {
  const { pending, error } = useSelector(state => state.signIn);
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
    isValidEmail: false,
    isValidPW: false,
    isLoading: false,
  });

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

  const loginSubmit = async e => {
    const { email, password, isValidEmail, isValidPW } = authData;
    e.preventDefault();
    if (email && password) {
      if (isValidEmail && isValidPW) {
        setAuthData(prevState => ({ ...prevState, isLoading: true }));
        dispatch(signIn(JSON.stringify({ email, password })));
      } else {
        alert("로그인 정보를 다 입력해주세요.");
      }
    }
  };

  useEffect(() => {
    if (authData.isLoading && !pending) {
      if (error) {
        alert("로그인에 실패했습니다.");
        setAuthData(prevState => ({ ...prevState, isLoading: false }));
      } else {
        setAuthData({
          email: "",
          password: "",
          isValidEmail: false,
          isValidPW: false,
          isLoading: false,
        });
        hideModal();
      }
    }
  }, [pending]);

  return (
    <Loginwrapper>
      <Wave width={480} height={640} />
      <LoginBox>
        <LoginTitle>로그인</LoginTitle>
        <CloseOutlined
          style={{
            display: "inline",
            float: "right",
            fontSize: "2rem",
            position: "absolute",
            top: 0,
            right: 0,
            margin: "20px",
          }}
          onClick={hideModal}
        />

        <form style={{ zIndex: 5 }}>
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
            onChange={changePassword}
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
          <SubmitButton
            onClick={async e => await loginSubmit(e)}
            fill={authData.email ? (authData.password ? 1 : 2) : 2}
          >
            로그인
          </SubmitButton>
          <SocialWrap>
            <SocialButton href={`${baseUrl}/auth/kakao`} social="kakao">
              Kakao
            </SocialButton>
            <SocialButton href={`${baseUrl}/auth/google`} social="google">
              Google
            </SocialButton>
            <SocialButton href={`${baseUrl}/auth/naver`} social="naver">
              Naver
            </SocialButton>
          </SocialWrap>
          <GotoJoin>
            계정이 없으신가요? <span onClick={changeForm}>회원가입</span>{" "}
            하러가기
          </GotoJoin>
        </form>
      </LoginBox>
    </Loginwrapper>
  );
};
