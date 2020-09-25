import React from "react";
import styled from "@emotion/styled";

import CardList from "../../components/CardList";

const MainWrapper = styled.div`
  margin-top: 60px;
`;

export default ({ categories, dataArr }) => {
  return (
    <MainWrapper>
      <CardList postDatas={dataArr} categories={categories} />
    </MainWrapper>
  );
};
