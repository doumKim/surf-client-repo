import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { deviceSize } from "../../constants/DiviceSize";

const CardWrap = styled.div`
  display: block;
  width: 100%;
  height: 160px;
  margin-top: 30px;
  overflow: hidden;
  background-color: #f1f3f5;
  border: 0.5px dashed #ced4da;
  border-radius: 5px;
  box-shadow: rgba(23, 25, 29, 0.05) 0 4px 10px;
  transform: translateY(0);
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover {
    box-shadow: rgba(23, 25, 29, 0.15) 0 4px 10px;
    transform: translateY(-4px);
  }
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media ${deviceSize.mobile} {
    height: 100px;
  }
  @media ${deviceSize.laptop} {
    height: 120px;
  }
`;

const CardEmptyBody = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;

  transform: scale(1.2);
  transition: transform 0.5s ease;
`;

export default ({ postData }) => {
  const handleImageLoadFailure = e => {
    e.target.src = "/images/no_image_indicator.png";
  };

  return (
    <Link style={{ textDecoration: "none" }} to={`post/${postData.wave.id}`}>
      <CardWrap>
        <CardContainer>
          <CardEmptyBody>파도 이어타러 가기 🏄‍♂️</CardEmptyBody>
        </CardContainer>
      </CardWrap>
    </Link>
  );
};
