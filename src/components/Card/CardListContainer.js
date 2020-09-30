import React from "react";
import styled from "@emotion/styled";
import { deviceSize } from "../../constants/DiviceSize";
import CardList from "./CardList";
import MainHeader from "../MainHeader";
import SubHeader from "../SubHeader";

const CardListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardListContainer = styled.div`
  width: 100%;
  max-width: 2160px;

  @media (max-width: 2206px) {
    max-width: 1800px;
  }
  @media (max-width: 1846px) {
    max-width: 1440px;
  }
  @media (max-width: 1486px) {
    max-width: 1080px;
  }
  @media (max-width: 1126px) {
    max-width: 720px;
  }
  @media ${deviceSize.tablet} {
    max-width: none;
  }
`;

export default ({ categories, dataArr }) => {
  return (
    <CardListWrapper>
      <CardListContainer>
        {categories ? <MainHeader categories={categories} /> : null}
        <SubHeader />
        <CardList dataArr={dataArr} />
      </CardListContainer>
    </CardListWrapper>
  );
};
