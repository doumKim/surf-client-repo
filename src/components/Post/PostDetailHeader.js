import React, { useState } from "react";
import styled from "@emotion/styled";
import { FiHeart } from "react-icons/fi";

const DetailImgWrap = styled.div`
  position: relative;
  width: 100%;

  box-shadow: #495057 0 2px 7px;
  border: none;
  border-radius: 8px 8px 0 0;
  background: none;
  @media (max-width: 1300px) {
    border-radius: 0;
  }
`;
const DetailImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
  @media (max-width: 1300px) {
    border-radius: 0;
  }
`;
const LikeButton = styled.button`
  width: 32px;
  height: 32px;
  background: none;
  text-align: center;
  line-height: 1;
  opacity: 0.7;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  border: none;

  // position config
  z-index: 3;
  position: absolute;
  top: 90%;
  left: 94%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  // @media (max-width: 1300px) {
  //   bottom: 66px;
  // }

  &:focus {
    outline: none;
  }

  svg {
    color: ${props => (props.like === "like" ? "#fa5252" : "#f8f9fa")};
    transition: all ease 0.5s;
    &:focus {
      outline: none;
    }
    &:hover {
      transform: scale(1.3);
      color: #e03131;
    }
  }
`;

export default function PostDetailHeader({ postData, sendLikeApi }) {
  const [like, setLike] = useState(false);
  const handleClickLike = () => {
    if (!like) {
      setLike(true);
      sendLikeApi(true);
    }
  };

  return (
    <DetailImgWrap>
      <DetailImg src={postData.postImage_url} alt={postData.postImage_url} />
      {like ? (
        <LikeButton like="like" onClick={handleClickLike}>
          <FiHeart />
        </LikeButton>
      ) : (
        <LikeButton onClick={handleClickLike}>
          <FiHeart />
        </LikeButton>
      )}
    </DetailImgWrap>
  );
}
