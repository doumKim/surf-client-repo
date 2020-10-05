import React from "react";
import styled from "@emotion/styled";

import CardListContainerJoin from "../../components/Card/CardListContainerJoin";

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
      <CardListContainerJoin allPosts={allPosts} showSubHeader={false} />
    </MainWrapper>
  );
};
