import React from "react";
import styled from "@emotion/styled";

import CardListContainer from "../../components/Card/CardListContainer";
import CardLoginList from "../../components/Card/CardLoginList";

const MainWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
`;

export default ({ categories, dataArr }) => {
  const isLoggedIn = true;
  return (
    <MainWrapper>
      {isLoggedIn ? <CardLoginList dataArr={dataArr} /> : null}
      <CardListContainer dataArr={dataArr} categories={categories} />
    </MainWrapper>
  );
};
