import React from "react";
import styled from "@emotion/styled";
import PostDetailHeader from "../../components/PostDetailHeader";
import PostDetailInfo from "../../components/PostDetailInfo";
import PostArea from "../../components/PostArea";
import { size } from "../../constants/DiviceSize";

const DetailWrap = styled.section`
  width: 1250px;
  display: flex;
  flex-direction: column;
  margin: 120px auto 80px auto;
  background-color: #f8f9fa;
  border: none;
  border-radius: 5px;
  box-shadow: #dee2e6 0 2px 5px;

  @media (max-width: 1300px) {
    width: 100%;
    margin-right: 0;
  }
`;

export default function PostDetailPresenter({ postData }) {
  return (
    <DetailWrap>
      <PostDetailHeader postData={postData} />
      <PostDetailInfo postData={postData} />
      <PostArea data={postData} />
    </DetailWrap>
  );
}
