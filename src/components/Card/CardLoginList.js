import React from "react";
import styled from "@emotion/styled";
import { deviceSize } from "../../constants/DiviceSize";
import LoginCard from "./LoginCard";

const CardLoginListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 150px;

  @media ${deviceSize.tablet} {
    flex-direction: column;
  }
`;

const CardLoginBlock = styled.div`
  width: 40%;
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

export default ({ postDatas }) => {
  return (
    <CardLoginListContainer>
      <CardLoginBlock>
        <BlockLabel>내가 일으킨 파도 목록</BlockLabel>
        {postDatas.map((data, index) => {
          if (index < 3) {
            return <LoginCard key={data.postId} postData={data} />;
          } else {
            return null;
          }
        })}
      </CardLoginBlock>
      <CardLoginBlock>
        <BlockLabel>내가 참여한 파도 목록</BlockLabel>
        {postDatas.map((data, index) => {
          if (index < 3) {
            return <LoginCard key={data.postId} postData={data} />;
          } else {
            return null;
          }
        })}
      </CardLoginBlock>
    </CardLoginListContainer>
  );
};
