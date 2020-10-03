import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { withResizeDetector } from "react-resize-detector";
import { myPageIconUrl } from "../../../constants/SurfIcons";
import { signOut } from "../../../modules/SignIn";

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
const MenuLink = styled(Link)`
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
  const dispatch = useDispatch();

  const handleImageLoadFailure = e => {
    e.target.src = "/images/default_user.png";
  };

  return (
    <MainContainer>
      <InnerBox>
        <MenuBox>
          <UserInfoBox>
            {loginData.avatar_url ? (
              <Avatar
                alt="avatar"
                src={loginData.avatar_url}
                onError={handleImageLoadFailure}
              />
            ) : (
              <Avatar alt="avatar" src={"/images/default_user.png"} />
            )}

            <div>
              <Link to="/user/mypage">{loginData.username}</Link>
            </div>
          </UserInfoBox>
          <MenuLink to="/user/mypage">
            <MenuIcon alt="user" src={myPageIconUrl.surfing_man}></MenuIcon>
            <h3>서퍼 정보 확인하기</h3>
          </MenuLink>
          <MenuLink to="/wave/new">
            <MenuIcon alt="post" src={myPageIconUrl.wave} />
            <h3>파도 일으키기</h3>
          </MenuLink>
          <MenuLink to="/user/likes">
            <MenuIcon alt="like" src={myPageIconUrl.like} />
            <h3>좋아요 목록</h3>
          </MenuLink>
          <MenuLink
            onClick={e => {
              e.preventDefault();
              dispatch(signOut());
            }}
            to="/"
          >
            <MenuIcon alt="like" src={myPageIconUrl.signout} />
            <h3>로그아웃</h3>
          </MenuLink>
        </MenuBox>
      </InnerBox>
    </MainContainer>
  );
};

export default withResizeDetector(SideAfterLoginController);
