import React from "react";
import styled from "@emotion/styled";
import { deviceSize } from "../constants/DiviceSize";
import Card from "./Card";
import MainHeaders from "./MainHeaders";

const CardListContainer = styled.div`
  display: grid;
  margin: 0 auto;
  padding: 0 20px;
  align-items: flex-end;

  grid-template-columns: repeat(auto-fit, 330px);
  @media ${deviceSize.tablet} {
    grid-template-columns: 1fr;
  }
  grid-gap: 15px;
  justify-content: ${props => (props.length === 0 ? "flex-start" : "center")};
`;

export default ({ postDatas, categories }) => {
  return (
    <CardListContainer length={postDatas.length}>
      {postDatas.length === 0 ? (
        <MainHeaders categories={categories} />
      ) : (
        postDatas.map((data, index) => {
          if (index > 0) {
            return <Card key={data.postId} postData={data} />;
          } else {
            return (
              <div key={data.postId}>
                <MainHeaders categories={categories} />
                <Card postData={data} />
              </div>
            );
          }
        })
      )}
    </CardListContainer>
  );
};
