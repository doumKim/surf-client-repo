import React, { useState } from "react";
import styled from "@emotion/styled";
import CardListContainer from "../components/Card/CardListContainer";
import { withRouter } from "react-router-dom";
import { getAllWavesAPI } from "../api";

const MainWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
`;
const NoSearchWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 200px;
  left: 150px;
  padding: 1rem;

  @media (max-width: 650px) {
    top: 180px;
    left: 110px;
  }
  @media (max-width: 400px) {
    top: 180px;
    left: 90px;
    h2 {
      font-size: 1rem;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    margin-bottom: 1.5rem;
  }
  button {
    border: none;
    border-radius: 5px;
    padding: 12px;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    background-color: #228be6;
    width: fit-content;
  }
`;

export default withRouter(
  ({ dataArr, currentSort, changeCurrentSort, history }) => {
    return (
      <MainWrapper>
        {dataArr.length === 0 ? (
          <NoSearchWrap>
            <h2>찾으시는 결과가 없습니다.</h2>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => history.goBack()}
            >
              뒤로 돌아가기
            </button>
          </NoSearchWrap>
        ) : (
          <CardListContainer
            allPosts={dataArr}
            currentSort={currentSort}
            changeCurrentSort={changeCurrentSort}
          />
        )}
      </MainWrapper>
    );
  }
);
