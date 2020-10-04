import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import LikeListPresenter from "./LikeListPresenter";
import { likePostsAPI } from "../../api";
import { getUserData } from "../../modules/SignIn";

export default ({ history }) => {
  const [likeData, setLikeData] = useState(null);
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

  const getLikePosts = async () => {
    try {
      if (isSignIn) {
        const result = await likePostsAPI().then(res => res.json());
        console.log(result);
        setLikeData(result.LikedWaves);
      }
    } catch (error) {
      alert("좋아요 한 목록을 가져오는데 실패했습니다.");
      history.push("/");
    }
  };

  useEffect(() => {
    if (isSignIn) {
      setLogin(true);
      getLikePosts();
    } else {
      if (login) {
        setLogin(false);
        history.push("/");
      }
    }
  }, [isSignIn]);

  return (
    <>{likeData !== null ? <LikeListPresenter allPosts={likeData} /> : null}</>
  );
};
