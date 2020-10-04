import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import MyWavePresenter from "./MyWavePresenter";
import { myWavesAPI } from "../../api";
import { getUserData } from "../../modules/SignIn";

export default withRouter(({ history }) => {
  const [myWaveData, setMyWaveData] = useState(null);
  const [login, setLogin] = useState(false);
  const [currentSort, setCurrentSort] = useState("like");
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

  const getMyWavePosts = async sort => {
    try {
      if (isSignIn) {
        const result = await myWavesAPI(sort).then(res => res.json());
        console.log(result);
        setMyWaveData(result);
      }
    } catch (error) {
      alert("내가 작성한 글 목록을 가져오는데 실패했습니다.");
      history.push("/");
    }
  };

  const changeCurrentSort = async sort => {
    setCurrentSort(sort);
    const result = await getMyWavePosts(sort);
    setMyWaveData(result);
  };

  useEffect(() => {
    if (isSignIn) {
      setLogin(true);
      getMyWavePosts(currentSort);
    } else {
      if (login) {
        setLogin(false);
        history.push("/");
      }
    }
  }, [isSignIn]);

  return (
    <>
      {myWaveData !== null ? (
        <MyWavePresenter
          allPosts={myWaveData}
          currentSort={currentSort}
          changeCurrentSort={changeCurrentSort}
        />
      ) : null}
    </>
  );
});
