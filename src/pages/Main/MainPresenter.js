import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const MainWrapper = styled.div`
  margin-top: 60px;
`;

const ContentContainer = styled.div``;
const ContentInner = styled.div``;
const ContentMainHeader = styled.div`
  padding: 0 20px;
`;
const MainHeaderNav = styled.ul`
  display: flex;
  flex-direction: row;
`;

const MainHeaderItem = styled.li`
  margin-left: 10px;
`;

const ContentSubHeader = styled.div`
  padding: 0 20px;
`;
const SubHeaderNav = styled.nav`
  background-color: ${props => (props.open ? "blue" : "red")};
`;

const ItemList = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, 330px);
  @media only screen and (max-height: 1024px) and (max-width: 1486px) {
    grid-template-columns: repeat(auto-fit, 300px);
  }
  @media only screen and (max-width: 766px) {
    grid-template-columns: 1fr;
  }
  grid-gap: 15px;
  justify-content: center;
`;

const Card = styled.div`
  width: 330px;
  height: 380px;
  display: inline-block;
  border-radius: 6px;
  overflow: hidden;
  @media only screen and (max-height: 1024px) and (max-width: 1486px) {
    width: 300px;
    height: 340px;
  }
  @media only screen and (max-width: 766px) {
    width: 100%;
    min-width: 280px;
    height: auto;
    border-radius: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export default ({ dataArr }) => {
  const [state, setState] = useState({ subHeaderOpen: false });

  useEffect(() => {
    console.log(state);
  });

  const handleSubHeaderClick = () => {
    setState(prevState => ({
      ...prevState,
      subHeaderOpen: !prevState.subHeaderOpen,
    }));
  };

  return (
    <MainWrapper>
      <ContentContainer>
        <ContentInner>
          <ContentMainHeader>
            <MainHeaderNav>
              <MainHeaderItem>인기</MainHeaderItem>
              <MainHeaderItem>최신</MainHeaderItem>
            </MainHeaderNav>
          </ContentMainHeader>
          <ContentSubHeader onClick={handleSubHeaderClick}>
            <SubHeaderNav open={state.subHeaderOpen}>하이</SubHeaderNav>
          </ContentSubHeader>
          <ItemList>
            {dataArr.map((data, index) => (
              <Card key={index}>
                <Image src={data.imageUrl}></Image>
              </Card>
            ))}
          </ItemList>
        </ContentInner>
      </ContentContainer>
    </MainWrapper>
  );
};
