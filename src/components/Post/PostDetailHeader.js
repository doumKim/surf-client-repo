import React, { useState } from "react";
import styled from "@emotion/styled";
import { FiHeart } from "react-icons/fi";
import { sendLike } from "../../postApi";
import { useSelector } from "react-redux";

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

export default function PostDetailHeader({ match, postData }) {
  const login = useSelector(state => state.signIn);

  const [like, setLike] = useState(false);
  const id = postData.id;

  const handleClickLike = () => {
    if (!like) {
      console.log(id);
      setLike(true);
      sendLike(id);
    }
  };
  console.log(postData);
  return (
    <DetailImgWrap>
      <DetailImg src={postData.title_image} alt={postData.title} />
      {login.isSignIn ? (
        like ? (
          <LikeButton like="like">
            <FiHeart />
          </LikeButton>
        ) : (
          <LikeButton onClick={handleClickLike}>
            <FiHeart />
          </LikeButton>
        )
      ) : null}
    </DetailImgWrap>
  );
}

// 클릭 되지 않은 상태에서만 api 호출할 수 있도록 처리
// 로그인 상태인지 확인하고 like button 조건부 랜더링
