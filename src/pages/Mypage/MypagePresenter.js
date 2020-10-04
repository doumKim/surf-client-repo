import React from "react";
import styled from "@emotion/styled";
import { size } from "../../constants/DiviceSize";
import UserFeatures from "../../components/User/UserFeature";
import UserInfo from "../../components/User/UserInfo";

const MypageWrap = styled.section`
  width: 1250px;
  display: flex;
  flex-direction: column;
  margin: 160px auto;
  @media (max-width: 1300px) {
    width: 1100px;
  }

  @media (max-width: ${size.laptop}) {
    width: 100%;
    margin: 140px 0 0 0;
  }

  @media (max-width: ${size.tablet}) {
    width: 100%;
    margin: 140px 0 0 0;
  }
`;
const MypageLabel = styled.label`
  font-size: 2rem;
  color: #343a40;
  border-bottom: 3px solid #343a40;
  width: fit-content;
  padding-bottom: 12px;
  font-weight: 600;
  margin-bottom: 2.4rem;

  @media (max-width: ${size.laptop}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${size.tablet}) {
    font-size: 1.3rem;
    margin-bottom: 1.6rem;
  }
`;
const UserInfoWrap = styled.section`
  background: #f8f9fa;
  width: 100%;
  margin-bottom: 2.5rem;
  border: none;
  box-shadow: #dee2e6 0 2px 6px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`;

export default function MypagePresenter({ openModal, userData, myPageData }) {
  return (
    <MypageWrap>
      <MypageLabel>마이페이지</MypageLabel>
      <UserInfoWrap>
        <UserInfo openModal={openModal} userData={userData} />
        <UserFeatures userData={userData} myPageData={myPageData} />
      </UserInfoWrap>
    </MypageWrap>
  );
}
