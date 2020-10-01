import { withRouter } from "react-router-dom";
import { clearUserData } from "./modules/SignIn";

const baseUrl = "https://surfapitest.tk";

export const signInAPI = data =>
  fetch(`${baseUrl}/auth/signin`, {
    method: "POST",
    credentials: "include",
    body: data,
  });

export const signOutAPI = () =>
  fetch(`${baseUrl}/auth/signout`, { method: "POST", credentials: "include" });

export const signUpAPI = data => {
  fetch(`${baseUrl}/auth/signup`, {
    method: "POST",
    credentials: "include",
    body: data,
  }).catch(alert("중복되는 이메일 또는 닉넥임을 입력하셨습니다."));
};

export const getUserInfo = withRouter(({ history }) => {
  fetch(`${baseUrl}/auth/userinfo`, {
    method: "GET",
    credentials: "include",
  }).catch(error => {
    alert("다시 로그인 해주세요.");
    clearUserData();
    history.push("/");
  });
});
