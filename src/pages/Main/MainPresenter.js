import React from "react";
import styled from "@emotion/styled";

import CardListContainer from "../../components/Card/CardListContainer";
import CardLoginList from "../../components/Card/CardLoginList";

const MainWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
`;


export default ({
  isSignIn,
  allPosts,
  myWaveList,
  joinWaveList,
  category,
  currentSort,
  changeCategory,
  changeCurrentSort,
}) => {

  return (
    <MainWrapper>
      {isSignIn && myWaveList !== null && joinWaveList !== null ? (
        <CardLoginList myWaveList={myWaveList} joinWaveList={joinWaveList} />
      ) : null}
      <CardListContainer
        allPosts={allPosts}
        showCategories={true}
        category={category}
        currentSort={currentSort}
        changeCategory={changeCategory}
        changeCurrentSort={changeCurrentSort}
      />
    </MainWrapper>
  );
};
