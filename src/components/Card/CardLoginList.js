import React from "react";
import styled from "@emotion/styled";
import { deviceSize } from "../../constants/DiviceSize";
import LoginCard from "./LoginCard";

const CardLoginListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 auto;
  margin-top: 150px;

  @media ${deviceSize.tablet} {
    flex-direction: column;
  }
`;

const CardLoginBlock = styled.div`
  width: 42%;
  height: 480px;
  @media ${deviceSize.tablet} {
    width: 100%;
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
  console.log(myWaveList, joinWaveList);
  return (
    <CardLoginListContainer>
      <CardLoginBlock>
        <BlockLabel>내가 일으킨 파도 목록</BlockLabel>
        {myWaveList.length !== 0 ? (
          myWaveList.map(data => {
            return <LoginCard key={data.postId} postData={data} />;
          })
        ) : (
          <EmptyReplacer>
            <EmptyText>내가 일으킨 파도가 없습니다.</EmptyText>
          </EmptyReplacer>
        )}
      </CardLoginBlock>
      <CardLoginBlock>
        <BlockLabel>
          <EmptyText>내가 참여한 파도 목록</EmptyText>
        </BlockLabel>
        {joinWaveList.length !== 0 ? (
          joinWaveList.map(data => {
            return <LoginCard key={data.postId} postData={data} />;
          })
        ) : (
          <EmptyReplacer>내가 참여한 파도가 없습니다.</EmptyReplacer>
        )}
      </CardLoginBlock>
    </CardLoginListContainer>
  );
};
