import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { HeartTwoTone } from "@ant-design/icons";
import { deviceSize } from "../../constants/DiviceSize";
import { useSelector } from "react-redux";
import { getLikeWave } from "../../postApi";
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

  @media ${deviceSize.tablet} {
    font-size: 12px;
  }
`;

export default ({ postData }) => {
  const [userLike, setUserLike] = useState(false);
  const handleImageLoadFailure = e => {
    e.target.src = "/images/no_image_indicator.png";
  };
  const login = useSelector(state => state.signIn);
  useEffect(() => {
    const fetcher = async () => {
      // login.isSignIn
      if (login.isSignIn) {
        // 로그인 된 상태라면 -> likeWave post 데이터 요청
        // -> 결과로 받은 것을 props.postData와 비교하고
        // -> 동일한 것을
        let temp = [];
        await getLikeWave().then(data => temp.concat(data.likeWaveList));

        const check = temp.filter(el => el.id === postData.id);
        if (check.length !== 0) {
          setUserLike(true);
        } else {
          setUserLike(false);
        }
      }
    };
    fetcher();
  }, []);

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
          <CardUser>{postData.username}</CardUser>

          <CardUser style={{ color: "#fa5252" }}>
            {userLike ? (
              <FcLike style={{ marginRight: "5px" }} />
            ) : (
              <FcLikePlaceholder style={{ marginRight: "5px" }} />
            )}
            {postData.likes}

          </CardUser>
        </CardBottom>
      </CardWrap>
    </Link>
  );
};
