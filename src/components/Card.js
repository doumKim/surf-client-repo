import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { HeartTwoTone } from "@ant-design/icons";
import { deviceSize } from "../constants/DiviceSize";

// Basic Card
const CardWrap = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: rgba(23, 25, 29, 0.05) 0 4px 10px;
  transform: translateY(0);
  margin-right: 1rem;
  margin-bottom: 1rem;
  &:hover {
    box-shadow: rgba(23, 25, 29, 0.15) 0 4px 10px;
    transform: translateY(-4px);
  }
  transition: box-shadow 0.3s, transform 0.3s;
  margin-right: 2rem;
  margin-bottom: 2rem;

  width: 330px;
  height: 380px;
  border-radius: 5px;

  @media ${deviceSize.tablet} {
    width: 100%;
    height: 380px;
    min-width: 280px;
    border-radius: 2px;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

const CardHead = styled.img`
  /* background-image: url(${props => props.imageUrl}); */
  /* background-size: cover; */
  display: block;
  height: 180px;
  width: 100%;
  object-fit: cover;
  @media ${deviceSize.tablet} {
    height: 230px;
  }
`;

const CardBody = styled.div`
  padding: 1rem;
  display: block;
  height: 150px;

  @media ${deviceSize.tablet} {
    padding: 0.8rem;
    height: auto;
  }
`;

export const Title = styled.h2`
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 700;
  color: #495057;

  @media ${deviceSize.laptop} {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const Synopsis = styled.div`
  padding-top: 4px;
  overflow: hidden;
  height: auto;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.5;
  font-weight: 400;
  color: #495057;
  font-size: 18px;

  @media ${deviceSize.tablet} {
    font-size: 14px;
  }
`;
export const CardBottom = styled.div`
  height: 50px;
  position: relative;
  left: 0;
  bottom: 0;
  display: flex;
  padding: 0.6rem 1rem 0.6rem 1rem;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e9ecef;

  @media ${deviceSize.tablet} {
    height: 50px;
  }
`;

export const CardUser = styled.div`
  font-weight: 600;
  color: #495057;
  font-size: 16px;

  @media ${deviceSize.tablet} {
    font-size: 12px;
  }
`;

export default function ({ postData }) {
  const handleImageLoadFailure = e => {
    e.target.src = "/images/no_image_indicator.png";
  };

  return (
    <Link to={`posts/:${postData.postId}/`}>
      <CardWrap>
        <CardHead
          src={postData.imageUrl}
          alt={postData.title}
          onError={handleImageLoadFailure}
        />
        <CardBody>
          <Title>{postData.title}</Title>
          <Synopsis>{postData.synopsis}</Synopsis>
        </CardBody>
        <CardBottom>
          <CardUser>{postData.username}</CardUser>
          <CardUser style={{ color: "#eb2f96" }}>
            <HeartTwoTone
              style={{ marginRight: "5px" }}
              twoToneColor="#eb2f96"
            />{" "}
            {postData.likes}
          </CardUser>
        </CardBottom>
      </CardWrap>
    </Link>
  );
}
