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
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  @media (max-width: ${size.laptop}) {
    margin-left: 2rem;
  }
`;
const UserFeatureItemWrap = styled.section`
  display: flex;
  flexl-direction: row;
  justify-content: space-around;
  margin-top: 2rem;
  margin-bottom: 1rem;
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
    h2 {
      display: block;
      font-size: 3rem;
      font-weight: 600;
      margin-top: 0;
      margin-bottom: 1rem;
      // text-align: end;
    }
    h4 {
      // display: block;
      font-size: 1.2rem;
      font-weight: 400;
      margin: 0 2rem 1rem 0;
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
  }
`;

const UserFeatures = ({ userData, myPageData }) => {
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
              <h4>파도 일으키기</h4>
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
              <h4>파도 이어가기</h4>
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
              userData.lv === 1
                ? myPageIconUrl.medal1st
                : userData.lv === 2
                ? myPageIconUrl.medal2nd
                : myPageIconUrl.medal3rd
            }
          />
          <div>
            <h4>서퍼 등급</h4>
            <h2>{userData.lv}</h2>
          </div>
        </UserFeature>
        <Link
          to="/user/likes"
          style={{ textDecoration: "none", color: "black" }}
        >
          <UserFeature>
            <img alt="link" src={myPageIconUrl.like} />
            <div>
              <h4>좋아요한 파도</h4>
              <h2>{myPageData.countLikeWave}</h2>
            </div>
          </UserFeature>
        </Link>
      </UserFeatureItemWrap>
    </UserFeatureBox>
  );
};

export default UserFeatures;
