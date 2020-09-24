import React from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  z-index: 100;
  min-width: 300px;
  background-color: blue;
`;

export default () => <HeaderContainer>헤더임</HeaderContainer>;
