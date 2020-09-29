import React, { useState } from "react";
import styled from "@emotion/styled";
import { FiHeart } from "react-icons/fi";

const DetailImgWrap = styled.div`
  width: 100%;
  height: 300px;
  box-shadow: #495057 0 2px 4px;
  border-radius: 8px 8px 0 0;
  @media (max-width: 1300px) {
    border-radius: 0;
  }
`;
const DetailImg = styled.img`
  width: 100%;
  height: 100%;
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
  position: relative;
  bottom: 66px;
  left: calc(${window.innerWidth}px * 0.8);

  @media (max-width: 1300px) {
    bottom: 66px;
  }

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

export default function PostDetailHeader({ postData }) {
  const [like, setLike] = useState(false);

  return (
    <DetailImgWrap>
      <DetailImg src={postData.postImage_url} alt={postData.postImage_url} />
      {like ? (
        <LikeButton like="like" onClick={() => setLike(true)}>
          <FiHeart />
        </LikeButton>
      ) : (
        <LikeButton onClick={() => setLike(true)}>
          <FiHeart />
        </LikeButton>
      )}
    </DetailImgWrap>
  );
}
