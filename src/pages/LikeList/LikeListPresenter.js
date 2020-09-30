import React from "react";
import styled from "@emotion/styled";

import CardListContainer from "../../components/Card/CardListContainer";

const MainWrapper = styled.div`
  margin: 60px 0;
`;

export default ({ dataArr }) => {
  return (
    <MainWrapper>
      <CardListContainer dataArr={dataArr} />
    </MainWrapper>
  );
};
