import React from "react";
import styled from "@emotion/styled";
// import { deviceSize } from "../../constants/DiviceSize";
import CardMine from "./CardMine";

const CardListContainer = styled.div`
  width: 100%;
`;

export default ({ allPosts }) => {
  return (
    <CardListContainer length={allPosts.length}>
      {allPosts.map((data, index) => (
        <CardMine key={index} postData={data} />
      ))}
    </CardListContainer>
  );
};
