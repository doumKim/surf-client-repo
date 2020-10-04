import React from "react";
import styled from "@emotion/styled";
import CardListContainerMine from "../../components/Card/CardListContainerMine";

const MainWrapper = styled.div`
  margin: 140px 0;
  min-height: calc(100vh - 279px);
`;

export default ({ allPosts, currentSort, changeCurrentSort }) => {
  return (
    <MainWrapper>
      <CardListContainerMine
        allPosts={allPosts}
        showCategories={false}
        showSubHeader={false}
      />
    </MainWrapper>
  );
};
