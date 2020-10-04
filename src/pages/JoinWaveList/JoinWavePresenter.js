import React from "react";
import styled from "@emotion/styled";

import CardListContainerJoin from "../../components/Card/CardListContainerJoin";

const MainWrapper = styled.div`
  margin: 60px 0;
`;

export default ({ allPosts }) => {
  return (
    <MainWrapper>
      <CardListContainerJoin allPosts={allPosts} showSubHeader={true} />
    </MainWrapper>
  );
};
