import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { size } from "../../constants/DiviceSize";
import { myPageIconUrl } from "../../constants/SurfIcons";

// user-feature style
const UserFeatureBox = styled.div`
  padding: 2rem;
  height: 640px;
  width: 640px;
  display: flex;
  flex-direction: column;
  @media (max-width: ${size.tablet}) {
    width: 480px;
    padding: 0;
    height: 560px;
  }
  @media (max-width: ${size.mobile}) {
    width: 320px;
    height: 120%;
    justify-content: center;
  }
`;
const UserFeatureItemWrap = styled.section`
  display: flex;
  flexl-direction: row;
  justify-content: space-around;
  margin-top: 2rem;
  @media (max-width: ${size.tablet}) {
    justify-content: space-around;
  }
  @media (max-width: ${size.mobile}) {
    justify-content: space-around;
  }
`;
const UserFeature = styled.div`
  width: 200px;
  height: 220px;
  background: inherit;
  border: none;
  border-radius: 8px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: start;

  div {
    width: 100%;
    h2 {
      display: block;

      font-size: 2rem;
      font-weight: 600;
      margin-top: 0;
      margin-bottom: 1rem;
      @media (max-width: 1100px) {
        font-size: 1.8rem;
      }
      @media (max-width: ${size.tablet}) {
        font-size: 1.5rem;
      }
      @media (max-width: ${size.mobile}) {
        font-size: 1.2rem;
      }
    }

    h4 {
      font-size: 1.2rem;
      font-weight: 400;
      margin: 0 2rem 1rem 0;

      @media (max-width: 1100px) {
        font-size: 1rem;
      }
    }
  }

  &:hover {
    box-shadow: #ced4da 0 2px 5px;
    transition: box-shadow 0.4s ease;
  }

  img {
    display: block;
    background-color: none;
    box-shadow: none;
    border: none;
    padding: 0;
    margin: 0;
    width: 80px;
    height: 80px;
    margin-bottom: 2rem;
    @media (max-width: 1100px) {
      width: 60px;
      height: 60px;
    }
    @media (max-width: ${size.tablet}) {
      width: 48px;
      height: 48px;
    }
    @media (max-width: ${size.mobile}) {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: ${size.tablet}) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: ${size.tablet}) {
    width: 160px;
    height: 150px;
  }
`;

const UserFeatures = ({ userData, myPageData }) => {
  console.log(myPageData, userData);
  return (
    <UserFeatureBox>
      <UserFeatureItemWrap>
        <Link
          to="/user/mywave"
          style={{ textDecoration: "none", color: "black" }}
        >
          <UserFeature>
            <img alt="wave" src={myPageIconUrl.wave} />
            <div>
              <h4>일으킨 목록</h4>
              <h2>{myPageData.countCreateWave}</h2>
            </div>
          </UserFeature>
        </Link>
        <Link
          to="/user/joinwave"
          style={{ textDecoration: "none", color: "black" }}
        >
          <UserFeature>
            <img alt="wave" src={myPageIconUrl.surfing} />
            <div>
              <h4>어어간 목록</h4>
              <h2>{myPageData.countJoinWave}</h2>
            </div>
          </UserFeature>
        </Link>
      </UserFeatureItemWrap>
      <UserFeatureItemWrap>
        <UserFeature>
          <img
            alt="level"
            src={
              userData.level === 1
                ? myPageIconUrl.medal3rd
                : userData.level === 2
                ? myPageIconUrl.medal2nd
                : myPageIconUrl.medal1st
            }
          />
          <div>
            <h4>서퍼 등급</h4>
            <h2>
              {userData.level === 1
                ? "베이비 서퍼"
                : userData.level === 2
                ? "주니어 서퍼"
                : "마스터 서퍼"}
            </h2>
          </div>
        </UserFeature>
        <Link
          to="/user/likes"
          style={{ textDecoration: "none", color: "black" }}
        >
          <UserFeature>
            <img alt="link" src={myPageIconUrl.like} />
            <div>
              <h4>좋아요 목록</h4>
              <h2>{myPageData.countLikeWave}</h2>
            </div>
          </UserFeature>
        </Link>
      </UserFeatureItemWrap>
    </UserFeatureBox>
  );
};

export default UserFeatures;
