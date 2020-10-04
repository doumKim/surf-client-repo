import React from "react";
import styled from "@emotion/styled";
// import { deviceSize } from "../../constants/DiviceSize";
import CardMine from "./CardMine";
import { myPageIconUrl } from "../../constants/SurfIcons";

const CardListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const PageLabel = styled.label`
  margin: 1rem 1rem 2rem 1rem;
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  align-items;
  width: fit-content;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 3px;
  }
  @media (max-width: 425px) {
    font-size: 1rem;
  }

  img {
    margin-right: 12px;
    width: 32px;
    height: 32px;

    @media (max-width: 768px) {
      width: 24px;
      height: 24px;
    }
    @media (max-width: 425px) {
      width: 18px;
      height: 18px;
    }
  }
`;

export default ({ allPosts }) => {
  return (
    <CardListContainer length={allPosts.length}>
      <PageLabel>
        <img src={myPageIconUrl.wave} alt="like" />
        내가 일으킨 파도 목록
      </PageLabel>
      <div>
        {allPosts.map((data, index) => (
          <CardMine key={index} postData={data} />
        ))}
      </div>
    </CardListContainer>
  );
};
