import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import { size } from "../../constants/DiviceSize";
import { CameraOutlined } from "@ant-design/icons";

const MypageWrap = styled.section`
  width: 1250px;
  display: flex;
  flex-direction: column;
  margin: 80px auto;
  @media (max-width: ${size.laptop}) {
    width: 930px;
  }

  @media (max-width: ${size.tablet}) {
    // 768px
    margin: 50px auto;
    width: 100%;
  }
`;

const MypageLabel = styled.label`
  font-size: 1rem;
  color: #343a40;
  border-bottom: 2px solid #343a40;
  width: fit-content;
  padding-bottom: 4px;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;
const UserInfoWrap = styled.section`
  width: 100%;
  display: flex;
  margin-bottom: 2.5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const UserInfoBox = styled.div`
  padding: 2rem;
  border: none;
  border-radius: 6px;
  background-color: #f8f9fa;
  box-shadow: #e9ecef 0 1px 4px;
  width: 42%;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:last-child {
    align-items: flex-start;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 2px;
    margin-right: 8px;
  }
  img {
    border-radius: 70%;
    text-align: center;
    width: 200px;
    height: 200px;
    margin-bottom: 2rem;
    box-shadow: #ced4da 0 2px 8px;
    // responsive-size
  }
  button {
    position: relative;
    bottom: 100px;
    left: 75px;
    border: none;
    border-radius: 50%;
    padding: 5px;
    background: #f8f9fa;
    box-shadow: #ced4da 0 2px 8px;
    color: #adb5bd;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  svg {
    &:hover {
      color: #343a40;
      transition: color 0.4s linear;
    }
  }
`;
const UserDetail = styled.div`
  display: flex;
  margin-bottom: 8px;
  margin-top: 12px;
  align-items: start;
  div {
    font-size: 1.5rem;
    font-weight: 600;
    width: 180px;
    margin: 0 1rem 0 1.2rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
  }

  input {
    font-size: 1.3rem;
    border: 0.5px solid #a5d8ff;
    border-radius: 3px;
    height: 20px;
  }
`;

export default function Mypage({ userData, changeImgApi }) {
  const [image, setImage] = useState(userData.avatar_url);
  const [isModify, setModify] = useState(false);
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const handleImageUpload = e => {
    // console.log(e.target.files[0]);
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  return (
    <MypageWrap>
      <MypageLabel>유저 정보</MypageLabel>
      <UserInfoWrap>
        <UserInfoBox>
          <input
            ref={imageUploader}
            type="file"
            accept="image/jpg,image/png,image/jpeg,image/gif"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
          <img ref={uploadedImage} src={image} alt={userData.username} />
          <h4>{userData.username}</h4>
          {isModify && (
            <button onClick={() => imageUploader.current.click()}>
              <CameraOutlined
                style={{ color: "#ced4da", fontSize: "1.5rem" }}
              />
            </button>
          )}
        </UserInfoBox>
        <UserInfoBox>
          <UserDetail>
            <div>이름</div>
            {isModify ? (
              <input value={userData.username} />
            ) : (
              <p>{userData.username}</p>
            )}
          </UserDetail>
          <UserDetail>
            <div>서퍼 이름</div>
            <p>{userData.surfer_name}</p>
          </UserDetail>
          <UserDetail>
            <div>파도 일으키기</div>
            <p>{userData.surfs}</p>
          </UserDetail>
          <UserDetail>
            <div>파도 이어가기</div>
            <p>{userData.join_surfs}</p>
          </UserDetail>
          <UserDetail>
            <div>서퍼 등급</div>
            <p>{userData.lv}</p>
          </UserDetail>
        </UserInfoBox>
      </UserInfoWrap>
      <MypageLabel>파도 정보</MypageLabel>
    </MypageWrap>
  );
}
