import React from "react";
import styled from "@emotion/styled";
import { withResizeDetector } from "react-resize-detector";
import { myPageIconUrl } from "../../../constants/SurfIcons";

const MainContainer = styled.div`
  position: relative;
  margin: 0 auto;
  background-color: #f8f9fa;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  padding: 0px 30px;
`;
const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
`;
const UserInfoBox = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 0 auto;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 8rem;
`;
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 2rem;
  border: none;
  border-radius: 50%;
`;
const MenuBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MenuLink = styled.a`
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 2px solid #ced4da;
  padding-bottom: 1rem;
  margin-bottom: 4rem;
  width: 100%;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.4s ease-out;
  }

  h3 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 600;
  }
`;
const MenuIcon = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 1.4rem;
  border: none;
`;

const SideAfterLoginController = ({ loginData }) => {
  return (
    <MainContainer>
      <InnerBox>
        <MenuBox>
          <UserInfoBox>
            <Avatar alt="avatar" src={loginData.avatar_url} />
            <div>
              <a href={`/user/${loginData.userId}`}>{loginData.username}</a>
            </div>
          </UserInfoBox>
          <MenuLink href={`/user/${loginData.userId}`}>
            <MenuIcon alt="user" src={myPageIconUrl.surfing_man}></MenuIcon>
            <h3>서퍼 정보 확인하기</h3>
          </MenuLink>
          <MenuLink href="/wave/new">
            <MenuIcon alt="post" src={myPageIconUrl.wave} />
            <h3>파도 일으키기</h3>
          </MenuLink>
          <MenuLink href="/">
            <MenuIcon alt="like" src={myPageIconUrl.like} />
            <h3>좋아요 목록</h3>
          </MenuLink>
          <MenuLink>
            <MenuIcon alt="like" src={myPageIconUrl.signout} />
            <h3>로그아웃</h3>
          </MenuLink>
        </MenuBox>
      </InnerBox>
    </MainContainer>
  );
};

export default withResizeDetector(SideAfterLoginController);
