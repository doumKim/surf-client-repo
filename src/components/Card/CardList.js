import React from "react";
import styled from "@emotion/styled";
// import { deviceSize } from "../../constants/DiviceSize";
import Card from "./Card";

const CardListContainer = styled.div`
  width: 100%;
`;

export default ({ allPosts }) => {
  return (
    <CardListContainer>
      {allPosts.map((data, index) => (
        <Card key={index} postData={data} />
      ))}
    </CardListContainer>
  );
};
