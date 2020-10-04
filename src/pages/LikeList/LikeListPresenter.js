import React from "react";
import styled from "@emotion/styled";

import CardListContainer from "../../components/Card/CardListContainer";

const MainWrapper = styled.div`
  margin: 140px 0;
`;

export default ({ allPosts }) => {
  return (
    <MainWrapper>
      <CardListContainer allPosts={allPosts} showSubHeader={false} />
    </MainWrapper>
  );
};
