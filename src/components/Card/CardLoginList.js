import React from "react";
import styled from "@emotion/styled";
import { deviceSize } from "../../constants/DiviceSize";
import LoginCard from "./LoginCard";
import JoinCard from "./JoinCard";

const CardLoginListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 150px;
  margin-bottom: 2rem;

  @media ${deviceSize.tablet} {
    flex-direction: column;
  }
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

const CardLoginBlock = styled.div`
  width: 46%;
  height: 600px;
  @media ${deviceSize.tablet} {
    width: 100%;
    height: 700px;
    min-width: 280px;
    border-radius: 2px;
    margin-bottom: 1rem;
  }
`;

const BlockLabel = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const EmptyReplacer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
`;

const EmptyText = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

export default ({ myWaveList, joinWaveList }) => {
  return (
    <CardLoginListContainer>
      <CardLoginBlock>
        <BlockLabel>일으킨 파도 목록</BlockLabel>
        {myWaveList.length !== 0 ? (
          myWaveList.map(data => {
            return <LoginCard key={data.id} postData={data} />;
          })
        ) : (
          <EmptyReplacer>
            <EmptyText>내가 일으킨 파도가 없습니다.</EmptyText>
          </EmptyReplacer>
        )}
      </CardLoginBlock>
      <CardLoginBlock>
        <BlockLabel>
          <EmptyText>이어간 파도 목록</EmptyText>
        </BlockLabel>
        {joinWaveList.length !== 0 ? (
          joinWaveList.map(data => {
            return <JoinCard key={data.id} postData={data} />;
          })
        ) : (
          <EmptyReplacer>내가 참여한 파도가 없습니다.</EmptyReplacer>
        )}
      </CardLoginBlock>
    </CardLoginListContainer>
  );
};
