import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  min-width: 300px;
  background-color: #4bcffa;
`;

const HeaderTitle = styled.div`
  width: 109px;
  height: 48px;
  font-family: Helvetica;
  font-size: 40px;
  font-weight: bold;
  color: #575fcf;
  margin-left: 32px;
`;

const HeaderLogo = styled.div``;

const HeaderUser = styled.div``;

export default () => (
  <HeaderContainer>
    <Link to={"/"}>
      <HeaderTitle>SURF</HeaderTitle>
    </Link>
    <HeaderLogo />
    <HeaderUser>hh</HeaderUser>
  </HeaderContainer>
);
