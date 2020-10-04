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
  border-radius: 5px;
  &:hover {
    box-shadow: rgba(23, 25, 29, 0.15) 0 4px 10px;
    transform: translateY(-4px);
  }
`;

const CardContainer = styled.div`
  display: flex;

  @media ${deviceSize.mobile} {
    height: 100px;
  }
  @media ${deviceSize.laptop} {
    height: 120px;
  }
`;

const CardHead = styled.img`
  display: block;
  width: 48%;
  height: 160px;
  object-fit: cover;
  border: none;

  @media ${deviceSize.tablet} {
    height: 150px;
  }
`;
const CardBody = styled.div`
  width: 52%;
  padding: 0.8rem;
  @media ${deviceSize.mobile} {
    padding: 0.7rem;
  }
  @media ${deviceSize.laptop} {
    padding: 1rem;
  }
`;
const Title = styled.h2`
  margin-top: 5px;
  margin-bottom: 14px;
  font-size: 1.7rem;
  font-weight: 700;

  @media ${deviceSize.tablet} {
    font-size: 1.4rem;
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
  font-size: 1rem;
  color: #495057;
  @media ${deviceSize.mobile} {
    font-size: 0.8rem;
  }
`;

export default ({ postData }) => {
  const handleImageLoadFailure = e => {
    e.target.src = "/images/no_image_indicator.png";
  };

  return (
    <Link style={{ textDecoration: "none" }} to={`post/${postData.wave.id}`}>
      <CardWrap>
        <CardContainer>
          <CardHead
            src={postData.wave.title_image}
            alt={postData.wave.title}
            onError={handleImageLoadFailure}
          />
          <CardBody>
            <Title>{postData.wave.title}</Title>
            <Synopsis>{postData.wave.synopsis}</Synopsis>
          </CardBody>
        </CardContainer>
      </CardWrap>
    </Link>
  );
};
