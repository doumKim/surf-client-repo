import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import JoinWavePresenter from "./JoinWavePresenter";
import { joinWavesAPI } from "../../api";
import { getUserData } from "../../modules/SignIn";
import { setSaturation } from "polished";

export default withRouter(({ history }) => {
  const [joinData, setJoinData] = useState(null);
  const [login, setLogin] = useState(false);
  const [start, setStart] = useState(0);
  const [hasMore, setHasMore] = useState(true);
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

  const getJoinPosts = async start => {
    try {
      if (isSignIn) {
        const result = await joinWavesAPI(start).then(res => res.json());
        if (result.length === 0) {
          setHasMore(false);
        }
        setJoinData(prev => (prev === null ? result : [...prev, ...result]));
        setStart(prev => prev + 10);
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
    <>
      {joinData !== null ? (
        <InfiniteScroll
          dataLength={joinData.length}
          next={() => getJoinPosts(start)}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <JoinWavePresenter allPosts={joinData} />
        </InfiniteScroll>
      ) : null}
    </>
  );
});
