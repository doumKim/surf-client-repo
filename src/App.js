import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Routes from "./Routes";
import GlobalStyles from "./constants/GlobalStyles";
import { Global } from "@emotion/core";
import { getUserData } from "./modules/SignIn";
import { baseUrl } from "./constants/GlobalVariables";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const registerUser = async () => {
      // 서버로부터 쿠키 받아오기
      await fetch(baseUrl, {
        method: "GET",
        credentials: "include",
        mode: "cors",
      });
      // 현재 세션 객체에 유저 데이터가 들어있는지 확인
      // 만약 들어있는데 현재 로그인이 안된 상태라면 자동 로그인
      dispatch(getUserData());
    };

    registerUser();
  }, []);

  return (
    <>
      <Global styles={GlobalStyles} />
      <Routes />
    </>
  );
};

export default App;
