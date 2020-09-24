import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { deviceSize } from "../constants/DiviceSize";

const CardWrap = styled.div`
  display: block;
  width: 672px;
  height: 120px;
  overflow: hidden;
  background-color: #f1f3f5;
  box-shadow: rgba(23, 25, 29, 0.05) 0 4px 10px;
  transform: translateY(0);
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover {
    box-shadow: rgba(23, 25, 29, 0.15) 0 4px 10px;
    transform: translateY(-4px);
  }
  @media ${deviceSize.mobileS} {
    width: 100%;
    height: 100px;
    margin-bottom: 1rem;
  }

  @media ${deviceSize.tablet} {
    width: 452px;
    height: 100px;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  @media ${deviceSize.laptop} {
    width: 672px;
    height: 120px;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
`;
const CardContainer = styled.div`
  display: flex;

  @media ${deviceSize.mobileS} {
    height: 100px;
  }
  @media ${deviceSize.laptop} {
    height: 120px;
  }
`;
const CardHead = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  width: 50%;
`;
const CardBody = styled.div`
  width: 50%;
  @media ${deviceSize.mobileS} {
    padding: 0.7rem;
  }
  @media ${deviceSize.laptop} {
    padding: 1rem;
  }
`;
const Title = styled.h2`
  @media ${deviceSize.mobileS} {
    margin-top: 2px;
    margin-bottom: 5px;
    font-size: 18px;
    fontweight: 500;
  }
  @media ${deviceSize.laptop} {
    margin-top: 5px;
    margin-bottom: 8px;
    font-size: 22px;
    fontweight: 700;
  }
`;
const Synopsis = styled.div`
  padding-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.5;
  font-weight: 400;
  color: #495057;
  @media ${deviceSize.mobileS} {
    font-size: 14px;
    -webkit-line-clamp: 1;
  }
`;

function CardLogin({ postData }) {
  return (
    <Link style={{ textDecoration: "none" }} to={`posts/:${postData.id}`}>
      <CardWrap>
        <CardContainer>
          <CardHead imageUrl={postData.imageUrl} />
          <CardBody>
            <Title>{postData.title}</Title>
            <Synopsis>{postData.synopsis}</Synopsis>
          </CardBody>
        </CardContainer>
      </CardWrap>
    </Link>
  );
}
export default function CardLoginList({ postDatas }) {
  return (
    <div>
      {postDatas.map(data => (
        <CardLogin key={data.postId} postData={data} />
      ))}
    </div>
  );
}
