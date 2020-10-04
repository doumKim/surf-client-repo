import React from "react";
import styled from "@emotion/styled";
// import { deviceSize } from "../../constants/DiviceSize";
import CardJoin from "./CardJoin";

const CardListContainer = styled.div`
  width: 100%;
`;

export default ({ allPosts }) => {
  return (
    <CardListContainer length={allPosts.length}>
      {allPosts.map((data, index) => (
        <CardJoin key={index} postData={data} />
      ))}
    </CardListContainer>
  );
};
