import React, { useState } from "react";
import styled from "@emotion/styled";
import Arrow from "./Arrow";

const HeaderWrapper = styled.div``;

const MainHeaderContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  margin-top: 85px;
  padding: 0 20px;
  font-size: 36px;
  font-weight: bold;
`;

const MainHeader = styled.div`
  display: inline-block;
  padding-right: 26px;
`;

const MainCategoryScroll = styled.ul`
  display: ${props => (props.open ? "block" : "none")};
  position: absolute;
  margin-top: 14px;
  padding: 40px 50px;
  height: auto;
  min-width: 400px;
  max-height: 600px;
  overflow-y: scroll;
  background: #fff;
  box-shadow: 0 6px 35px rgba(23, 25, 29, 0.2);
  z-index: 2;
  color: #515151;
  cursor: default;
`;

const MainCategoryItem = styled.div`
  cursor: pointer;
  margin-bottom: 18px;
  color: ${props => (props.selected ? "#6D87EA" : "#515151")};
`;

const CategorySplit = styled.div`
  font-size: 13px;
  color: #8c8c8c;
  margin-top: 26px;
  margin-bottom: 18px;
`;

const SubHeaderNav = styled.ul`
  padding: 0 20px;
  margin-bottom: 50px;
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

export default ({ categories }) => {
  const [state, setState] = useState({
    mainHeaderOpen: false,
    curCategory: "전체",
    curSelection: 0,
  });

  const handleMainHeaderClick = () => {
    console.log("clicked");
    setState(prevState => ({
      ...prevState,
      mainHeaderOpen: !prevState.mainHeaderOpen,
    }));
  };

  const handleCategorySelect = e => {
    const curCategory = e.target.textContent;
    setState(prevState => ({
      ...prevState,
      curCategory,
      mainHeaderOpen: false,
    }));
  };

  return (
    <HeaderWrapper>
      <MainHeaderContainer>
        <div onClick={handleMainHeaderClick}>
          <MainHeader open={state.mainHeaderOpen}>
            {state.curCategory}
          </MainHeader>
          <Arrow open={state.mainHeaderOpen} />
        </div>
        <MainCategoryScroll open={state.mainHeaderOpen}>
          <MainCategoryItem
            onClick={handleCategorySelect}
            selected={state.curCategory === "전체"}
            style={{ fontSize: "27px" }}
          >
            전체
          </MainCategoryItem>
          <CategorySplit>Category</CategorySplit>
          {categories.map((category, index) => (
            <MainCategoryItem
              key={index}
              onClick={handleCategorySelect}
              selected={state.curCategory === category}
              style={{ fontSize: "19px" }}
            >
              {category}
            </MainCategoryItem>
          ))}
        </MainCategoryScroll>
      </MainHeaderContainer>
      <SubHeaderNav>
        <SubHeaderItem
          onClick={() =>
            setState(prevState => ({
              ...prevState,
              curSelection: 0,
            }))
          }
          selected={state.curSelection === 0}
        >
          <SubHeaderImage
            style={{ width: "24px", height: "24px" }}
            imageUrl={
              state.curSelection === 0
                ? "/images/fav_active.png"
                : "/images/fav_normal.png"
            }
          />
          <SubHeaderText selected={state.curSelection === 0}>
            인기
          </SubHeaderText>
        </SubHeaderItem>
        <SubHeaderItem
          onClick={() =>
            setState(prevState => ({
              ...prevState,
              curSelection: 1,
            }))
          }
          selected={state.curSelection === 1}
        >
          <SubHeaderImage
            style={{ width: "18px", height: "24px" }}
            imageUrl={
              state.curSelection === 1
                ? "/images/recent_active.png"
                : "/images/recent_normal.png"
            }
          />
          <SubHeaderText selected={state.curSelection === 1}>
            최신
          </SubHeaderText>
        </SubHeaderItem>
      </SubHeaderNav>
    </HeaderWrapper>
  );
};
