import React from "react";
import styled from "@emotion/styled";

const ArrowContainer = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  text-align: center;
  opacity: 1;
  box-shadow: 0 6px 22px rgba(23, 25, 29, 0.1);
`;

const ArrowSVG = styled.svg`
  display: block;
  width: 30px;
  height: 30px;
  fill: none;
`;

const Rect = styled.rect``;

const ArrowPath = styled.path`
  fill: #a0a0a2;
  transform: ${props => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
  transform-origin: center center;
  transition: all 0.2s;
`;

export default ({ open }) => {
  return (
    <ArrowContainer>
      <ArrowSVG>
        <Rect rx="10" />
        <ArrowPath
          open={open}
          d="M15 19L15 19 9 13.4 10.5 12 15 16.2 19.5 12 21 13.4 15 19 15 19Z"
        />
      </ArrowSVG>
    </ArrowContainer>
  );
};
