import React from "react";
import styled from "@emotion/styled";
import CardListContainerLike from "../../components/Card/CardListContainerLike";
import { myPageIconUrl } from "../../constants/SurfIcons";

const MainWrapper = styled.div`
  margin: 140px auto;

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
      <CardListContainerLike allPosts={allPosts} showSubHeader={false} />
    </MainWrapper>
  );
};
