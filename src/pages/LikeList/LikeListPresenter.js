import React from "react";
import styled from "@emotion/styled";

import CardList from "../../components/Card/CardList";

const MainWrapper = styled.div`
  margin: 60px 0;
`;

export default ({ categories, dataArr }) => {
  return (
    <MainWrapper>
      <CardList postDatas={dataArr} categories={categories} />
    </MainWrapper>
  );
};
