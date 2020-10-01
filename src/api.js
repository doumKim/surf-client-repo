import { withRouter } from "react-router-dom";
import { clearUserData } from "./modules/SignIn";

const baseUrl = "https://surfapitest.tk";

export const signInAPI = data =>
  fetch(`${baseUrl}/auth/signIn`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

export const signOutAPI = () =>
  fetch(`${baseUrl}/auth/signOut`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const signUpAPI = data =>
  fetch(`${baseUrl}/auth/signUp`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

export const getUserInfo = withRouter(({ history }) => {
  fetch(`${baseUrl}/auth/userinfo`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch(error => {
    alert("다시 로그인 해주세요.");
    clearUserData();
    history.push("/");
  });
});
