import React from "react";
import styled from "@emotion/styled";
import CardListContainerMine from "../../components/Card/CardListContainerMine";

const MainWrapper = styled.div`
  margin: 140px 0;

  @media (max-width: 768px) {
    margin: 120px auto;
  }
  @media (max-width: 425px) {
    margin: 100px auto;
  }
`;

export default ({ allPosts }) => {
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
