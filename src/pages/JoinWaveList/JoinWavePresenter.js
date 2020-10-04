import React from "react";
import styled from "@emotion/styled";

import CardListContainerJoin from "../../components/Card/CardListContainerJoin";

const MainWrapper = styled.div`
  margin: 140px 0;
  min-height: calc(100vh - 279px);
`;

export default ({ allPosts }) => {
  return (
    <MainWrapper>
      <CardListContainerJoin allPosts={allPosts} showSubHeader={false} />
    </MainWrapper>
  );
};
