import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MainPresenter from "./MainPresenter";
import { categoryToEng } from "../../constants/Category";
import { getAllWavesAPI, joinWavesAPI, myWavesAPI } from "../../api";

export default () => {
  const { isSignIn } = useSelector(state => state.signIn);
  const [state, setState] = useState({ isLoading: false });
  const [category, setCategory] = useState("전체");
  const [posts, setPosts] = useState(null);
  const [myWaveList, setMyWaveList] = useState(null);
  const [joinWaveList, setJoinWaveList] = useState(null);
  const [currentSort, setCurrentSort] = useState("like");

  useEffect(() => {
    const getWavesData = async () => {
      const promiseArr = [
        getAllWavesAPI(currentSort, categoryToEng[category]).then(res =>
          res.json()
        ),
      ];

      if (isSignIn && myWaveList === null) {
        console.log("fetching myWaveList");
        promiseArr.push(myWavesAPI("created_at", 3).then(res => res.json()));
      }

      if (isSignIn && joinWaveList === null) {
        console.log("fetching joinWaveList");
        promiseArr.push(joinWavesAPI(3).then(res => res.json()));
      }

      const results = await Promise.all(promiseArr);

      if (isSignIn && myWaveList === null) {
        setMyWaveList(results[1]);
      }
      if (isSignIn && joinWaveList === null) {
        setJoinWaveList(results[2]);
      }

      setPosts(results[0]);
      setState({ isLoading: false });
    };

    setState({ isLoading: true });
    getWavesData();
  }, [isSignIn, currentSort, category]);

  return (
    <>
      {!state.isLoading && posts ? (
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
      ) : null}
    </>
  );
};
