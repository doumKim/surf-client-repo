import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MainPresenter from "./MainPresenter";
import { categoryToEng } from "../../constants/Category";
import { getAllWavesAPI, joinWavesAPI, myWavesAPI } from "../../api";
import queryString from "query-string";
import { searchWave } from "../../postApi";
import SearchContainer from "../SearchContainer";

export default ({ location }) => {
  const { isSignIn } = useSelector(state => state.signIn);
  const [state, setState] = useState({ isLoading: false });
  const [category, setCategory] = useState("전체");
  const [posts, setPosts] = useState(null);
  const [myWaveList, setMyWaveList] = useState(null);
  const [joinWaveList, setJoinWaveList] = useState(null);
  const [currentSort, setCurrentSort] = useState("like");
  const [searchData, setSearchData] = useState(null);
  const query = queryString.parse(location.search);

  useEffect(() => {
    const getWavesData = async () => {
      const promiseArr = [
        getAllWavesAPI(currentSort, categoryToEng[category]).then(res =>
          res.json()
        ),
      ];
      if (isSignIn && myWaveList === null) {
        promiseArr.push(myWavesAPI("created_at", 3).then(res => res.json()));
      }
      if (isSignIn && joinWaveList === null) {
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
    if (!query.category) {
      console.log("rendering main");
      setSearchData(null);
      setState({ isLoading: true });
      getWavesData();
    }
  }, [isSignIn, currentSort, category, query.category]);

  useEffect(() => {
    if (query.category) {
      console.log("rendering category");
      setSearchData(null);
      handleQuery();
    }
  }, [query.category, currentSort]);

  const handleQuery = async () => {
    if (query.category) {
      console.log(currentSort);
      const keyword = categoryToEng[`${query.category}`];
      await searchWave(keyword, currentSort)
        .then(res => res.json())
        .then(data => setSearchData(data));
    }
  };

  return (
    <>
      {!state.isLoading && posts ? (
        searchData ? (
          <SearchContainer
            dataArr={searchData}
            currentSort={currentSort}
            changeCurrentSort={setCurrentSort}
          />
        ) : (
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
        )
      ) : null}
    </>
  );
};
