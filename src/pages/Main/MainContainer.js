import React, { useEffect, useState } from "react";
import data from "../../data";
import MainPresenter from "./MainPresenter";
import queryString from "query-string";
import { searchWave } from "../../postApi";
import SearchContainer from "../SearchContainer";

export default ({ location }) => {
  const [searchData, setSearchData] = useState(null);
  const query = queryString.parse(location.search);

  const handleQuery = async () => {
    if (query.category) {
      const keyword = CATEGORIES[`${query.category}`];

      await searchWave(keyword)
        .then(res => res.json())
        .then(data => setSearchData(data));
    }
  };

  useEffect(() => {
    setSearchData(null);
    handleQuery();
  }, [query.category]);

  return (
    <>
      {searchData ? (
        <SearchContainer dataArr={searchData} />
      ) : (
        <MainPresenter categories={Object.keys(CATEGORIES)} dataArr={data} />
      )}{" "}
    </>
  );
};

const CATEGORIES = {
  무협: "martial",
  액션: "action",
  판타지: "fantasy",
  로맨스: "romance",
  SF: "sf",
  현대: "modern",
  게임: "game",
  스포츠: "sports",
};
