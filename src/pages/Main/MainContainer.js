import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import MainPresenter from "./MainPresenter";
import { categoryToEng } from "../../constants/Category";
import { getAllWavesAPI, joinWavesAPI, myWavesAPI } from "../../api";

export default () => {
  const { isSignIn } = useSelector(state => state.signIn);
  const [state, setState] = useState({ isLoading: true });
  const [category, setCategory] = useState("전체");
  const [posts, setPosts] = useState(null);
  const [myWaveList, setMyWaveList] = useState(null);
  const [joinWaveList, setJoinWaveList] = useState(null);
  const [currentSort, setCurrentSort] = useState("like");
  const [mainStart, setMainStart] = useState(0);
  const [mainHasMore, setMainHasMore] = useState(true);

  const getNextAllWaves = async start => {
    const result = await getAllWavesAPI(
      currentSort,
      categoryToEng[category],
      start
    ).then(res => res.json());
    console.log(result);
    setPosts(prev => (prev === null ? result : [...prev, ...result]));
    setMainStart(prev => prev + 10);
    setState({ isLoading: false });
  };

  const getWavesData = async () => {
    const promiseArr = [];

    if (isSignIn && myWaveList === null) {
      promiseArr.push(myWavesAPI("created_at", 3).then(res => res.json()));
    }
    if (isSignIn && joinWaveList === null) {
      promiseArr.push(joinWavesAPI(3).then(res => res.json()));
    }

    const result = await Promise.all(promiseArr);

    if (isSignIn && myWaveList === null) {
      setMyWaveList(result[0]);
    }
    if (isSignIn && joinWaveList === null) {
      setJoinWaveList(result[1]);
    }
  };

  useEffect(() => {
    const getInitialSearchResults = async () => {
      setState({ isLoading: true });
      setPosts(null);
      setMainStart(0);
      if (isSignIn) {
        await getWavesData();
      }
    };
    getInitialSearchResults();
  }, [isSignIn, currentSort, category]);

  useEffect(() => {
    if (mainStart === 0) {
      getNextAllWaves(mainStart);
    }
  }, [mainStart]);
  return (
    <>
      {!state.isLoading ? (
        <InfiniteScroll
          dataLength={posts.length}
          next={() => getNextAllWaves(mainStart)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          style={{ overflow: "hidden" }}
        >
          <MainPresenter
            isSignIn={isSignIn}
            allPosts={posts}
            myWaveList={myWaveList}
            joinWaveList={joinWaveList}
            category={category}
            currentSort={currentSort}
            changeCategory={setCategory}
            changeCurrentSort={setCurrentSort}
          />
        </InfiniteScroll>
      ) : null}
    </>
  );
};
