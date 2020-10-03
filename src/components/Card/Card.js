import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { deviceSize } from "../../constants/DiviceSize";
import { useSelector } from "react-redux";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

// Basic Card
const CardWrap = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: rgba(23, 25, 29, 0.05) 0 4px 10px;
  transform: translateY(0);
  &:hover {
    box-shadow: rgba(23, 25, 29, 0.15) 0 4px 10px;
    transform: translateY(-4px);
  }
  transition: box-shadow 0.3s, transform 0.3s;

  width: 330px;
  height: 430px;
  margin: 15px;
  border-radius: 5px;

  @media ${deviceSize.tablet} {
    width: 100%;
    height: 385px;
    min-width: 280px;
    border-radius: 2px;
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const CardHead = styled.img`
  display: block;
  height: 230px;
  width: 100%;
  object-fit: cover;
  @media ${deviceSize.tablet} {
    height: 215px;
  }
`;

const CardBody = styled.div`
  padding: 1rem;
  display: block;
  height: 160px;

  @media ${deviceSize.tablet} {
    height: 130px;
    padding: 0.8rem;
  }
`;

export const Title = styled.h2`
  margin-top: 5px;
  font-size: 22px;
  font-weight: 700;
  color: #495057;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.5;

  @media ${deviceSize.tablet} {
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
  height: 40px;
  position: relative;
  left: 0;
  bottom: 0;
  display: flex;
  padding: 0.6rem 1rem;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e9ecef;
`;

export const CardUser = styled.div`
  font-weight: 600;
  color: #495057;
  font-size: 16px;
  display: flex;
  align-items: center;

  @media ${deviceSize.tablet} {
    font-size: 12px;
  }
`;

export default ({ postData }) => {
  const handleImageLoadFailure = e => {
    e.target.src = "/images/no_image_indicator.png";
  };
  const handleUserImageLoadFailure = e => {
    e.target.src = "/images/default_user.png";
  };
  const login = useSelector(state => state.signIn);

  return (
    <Link to={`post/${postData.id}/`}>
      <CardWrap>
        <CardHead
          src={postData.title_image}
          alt={postData.title}
          onError={handleImageLoadFailure}
        />
        <CardBody>
          <Title>{postData.title}</Title>
          <Synopsis>{postData.synopsis}</Synopsis>
        </CardBody>
        <CardBottom>
          {/* login.isSignIn && */}
          <CardUser>
            <img
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                marginRight: "8px",
                backgroundColor: "#dee2e6",
              }}
              src={postData.creator_info.avartar_url}
              alt={postData.creator_info.username}
              onError={handleUserImageLoadFailure}
            />
            <div>{postData.creator_info.username}</div>
          </CardUser>

          <CardUser style={{ color: "#fa5252" }}>
            {postData.liked ? (
              <FcLike style={{ marginRight: "5px" }} />
            ) : (
              <FcLikePlaceholder style={{ marginRight: "5px" }} />
            )}
            {postData.like_count}
          </CardUser>
        </CardBottom>
      </CardWrap>
    </Link>
  );
};
