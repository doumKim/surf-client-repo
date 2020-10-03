import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import { size } from "../../constants/DiviceSize";
import { FiCamera, FiUnlock } from "react-icons/fi";
import { lighten } from "polished";
import { changeImageAPI } from "../../api";

const UserInfoBox = styled.div`
  padding: 3rem;
  height: 640px;

  display: grid;
  place-items: center;

  img {
    border-radius: 70%;
    text-align: center;
    width: 270px;
    height: 270px;

    box-shadow: #ced4da 0 2px 8px;

    @media (max-width: ${size.laptop}) {
      margin-left: 0;
      margin-bottom: 4rem;
      width: 220px;
      height: 220px;
    }
  }

  @media (max-width: ${size.laptop}) {
    padding: 2rem;
    margin-left: 0;
  }
`;
const UserDetail = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;

  div {
    font-size: 1.5rem;
    font-weight: 600;
    // width: 180px;
    // margin-right: 1rem;

    @media (max-width: ${size.laptop}) {
      font-size: 1.2rem;
      margin-right: 12px;
      width: 120px;
    }
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
    color: #495057;

    @media (max-width: ${size.laptop}) {
      font-size: 1.2rem;
    }
  }

  input {
    font-size: 1.3rem;
    border: none;
    width: 180px;
    border-bottom: 2px solid ${lighten(0.15, "#4dabf7")};
    // padding-bottom: 8px;
    line-height: 1.5rem;
    height: 20px;
    background: none;
    color: #4dabf7;

    &:focus {
      outline: none;
    }

    @media (max-width: ${size.laptop}) {
      font-size: 1.2rem;
      width: 150px;
    }
  }
`;
const AmendButton = styled.button`
  margin-bottom: 2rem;
  cursor: pointer;
  display: block;
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  font-size: 1.2rem;
  font-weight: 500;

  &:hover {
    box-shadow: #ced4da 0 1px 4px;
  }
  &:focus {
    outline: none;
  }

  transition: box-shadow 0.3s linear;

  color: ${props => {
    if (props.fill === "blue") {
      return "#fff";
    } else {
      return "#495057";
    }
  }};
  background-color: ${props => {
    if (props.fill === "blue") {
      return "#4dabf7";
    } else {
      return "#e9ecef";
    }
  }};

  @media (max-width: ${size.laptop}) {
    font-size: 1rem;
  }
`;
const CameraButton = styled.button`
  position: relative;
  bottom: 60px;
  left: 80px;
  border: none;
  border-radius: 50%;
  padding: 10px;
  background: #f8f9fa;
  box-shadow: #ced4da 0 1px 8px;
  color: #adb5bd;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  svg {
    font-size: 2rem;

    @media (max-width: ${size.laptop}) {
      font-size: 1rem;
    }
  }
  @media (max-width: ${size.laptop}) {
    bottom: 75px;
    left: -45px;
  }
`;

const UserInfo = ({ userData, openModal }) => {
  const [image, setImage] = useState(
    userData.avartar_url ? userData.avartar_url : "/images/default_user.png"
  );

  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  console.log(userData);

  const handleImageUpload = async event => {
    const formData = new FormData();
    formData.append("avatar", event.target.files[0]);
    try {
      const result = await changeImageAPI(formData).then(res => res.json());
      console.log(result);
      setImage(result.url);
    } catch (error) {
      alert("아바타 변경에 실패했습니다.");
    }
  };

  return (
    <UserInfoBox>
      <section style={{ display: "grid", placeItems: "center" }}>
        <input
          ref={imageUploader}
          type="file"
          accept="image/jpg,image/png,image/jpeg,image/gif"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
        <img ref={uploadedImage} src={image} alt={userData.username} />
        <CameraButton onClick={() => imageUploader.current.click()}>
          <FiCamera style={{ color: "#4dabf7" }} />
        </CameraButton>
      </section>
      <section style={{ display: "grid", placeItems: "center" }}>
        <UserDetail>
          <div>{userData.username}</div>
        </UserDetail>

        <AmendButton type="submit" onClick={() => openModal(true)}>
          패스워드 수정{" "}
          <FiUnlock style={{ marginLeft: "12px", fontSize: "1rem" }} />
        </AmendButton>
      </section>
    </UserInfoBox>
  );
};

export default UserInfo;
