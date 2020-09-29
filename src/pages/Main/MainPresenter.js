import React from "react";
import styled from "@emotion/styled";

import CardList from "../../components/Card/CardList";
import CardLoginList from "../../components/Card/CardLoginList";

const MainWrapper = styled.div`
  margin-top: 60px;
`;

export default ({ categories, dataArr }) => {
  const isLoggedIn = true;
  return (
    <MainWrapper>
      {isLoggedIn ? <CardLoginList postDatas={dataArr} /> : null}
      <CardList postDatas={dataArr} categories={categories} />
    </MainWrapper>
  );
};
