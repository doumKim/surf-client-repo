import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);

  animation-duration: 0.25s;
  animation-timing-function: linear;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;
