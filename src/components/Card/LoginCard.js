import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { deviceSize } from "../../constants/DiviceSize";

const CardWrap = styled.div`
  display: block;
  width: 100%;
  height: 160px;
  margin-top: 30px;
  overflow: hidden;
  background-color: #f1f3f5;
  box-shadow: rgba(23, 25, 29, 0.05) 0 4px 10px;
  transform: translateY(0);
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover {
    box-shadow: rgba(23, 25, 29, 0.15) 0 4px 10px;
    transform: translateY(-4px);
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

const CardHead = styled.img`
  display: block;
  width: 50%;
  height: 160px;
  object-fit: cover;

  @media ${deviceSize.tablet} {
    height: 150px;
  }
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
  margin-top: 5px;
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: 700;

  @media ${deviceSize.tablet} {
    font-size: 20px;
    font-weight: 700;
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
  }
`;

export default ({ postData }) => {
  const handleImageLoadFailure = e => {
    e.target.src = "/images/no_image_indicator.png";
  };

  return (
    <Link style={{ textDecoration: "none" }} to={`posts/${postData.id}`}>
      <CardWrap>
        <CardContainer>
          <CardHead
            src={postData.title_image}
            alt={postData.title}
            onError={handleImageLoadFailure}
          />
          <CardBody>
            <Title>{postData.title}</Title>
            <Synopsis>{postData.synopsis}</Synopsis>
          </CardBody>
        </CardContainer>
      </CardWrap>
    </Link>
  );
};
