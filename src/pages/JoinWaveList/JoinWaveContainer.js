import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import JoinWavePresenter from "./JoinWavePresenter";
import { joinWavesAPI } from "../../api";
import { getUserData } from "../../modules/SignIn";

export default withRouter(({ history }) => {
  const [joinData, setJoinData] = useState(null);
  const [login, setLogin] = useState(false);
  const { isSignIn, error } = useSelector(state => state.signIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert("로그인이 필요합니다.");
      history.push("/");
    } else {
      dispatch(getUserData());
    }
  }, [error]);

  const getJoinPosts = async () => {
    try {
      if (isSignIn) {
        const result = await joinWavesAPI().then(res => res.json());
        setJoinData(result);
      }
    } catch (error) {
      alert("내가 참여한 글 목록을 가져오는데 실패했습니다.");
      history.push("/");
    }
  };

  useEffect(() => {
    if (isSignIn) {
      setLogin(true);
      getJoinPosts();
    } else {
      if (login) {
        setLogin(false);
        history.push("/");
      }
    }
  }, [isSignIn]);

  return (
    <>{joinData !== null ? <JoinWavePresenter allPosts={joinData} /> : null}</>
  );
});
