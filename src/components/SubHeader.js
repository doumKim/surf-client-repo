import React from "react";
import styled from "@emotion/styled";

const SubHeaderNav = styled.ul`
  padding: 0 20px;
  margin-bottom: 50px;
  width: 100%;
  height: 40px;
  margin-top: 85px;
  display: flex;
  flex-direction: row;
  font-size: 24px;
  font-weight: bold;
`;

const SubHeaderItem = styled.li`
  cursor: pointer;
  margin-right: 30px;
  padding-bottom: 10px;
  border-bottom: ${props => (props.selected ? "2px solid #6D87EA" : "none")};
`;

const SubHeaderImage = styled.div`
  display: inline-block;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  margin-right: 10px;
`;

const SubHeaderText = styled.span`
  color: ${props => (props.selected ? "#6D87EA" : "black")};
`;

export default ({ currentSort, changeCurrentSort }) => {
  return (
    <SubHeaderNav>
      <SubHeaderItem
        onClick={() => {
          if (currentSort === "created_at") {
            changeCurrentSort("like");
          }
        }}
        selected={currentSort === "like"}
      >
        <SubHeaderImage
          style={{ width: "24px", height: "24px" }}
          imageUrl={
            currentSort === "like"
              ? "/images/fav_active.png"
              : "/images/fav_normal.png"
          }
        />
        <SubHeaderText selected={currentSort === "like"}>인기</SubHeaderText>
      </SubHeaderItem>
      <SubHeaderItem
        onClick={() => {
          if (currentSort === "like") {
            changeCurrentSort("created_at");
          }
        }}
        selected={currentSort === "created_at"}
      >
        <SubHeaderImage
          style={{ width: "18px", height: "24px" }}
          imageUrl={
            currentSort === "created_at"
              ? "/images/recent_active.png"
              : "/images/recent_normal.png"
          }
        />
        <SubHeaderText selected={currentSort === "created_at"}>
          최신
        </SubHeaderText>
      </SubHeaderItem>
    </SubHeaderNav>
  );
};
