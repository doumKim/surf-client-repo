import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  background-color: #f8f9fa;
  border: none;
  border-radius: 5px;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
  width: 480px;
  height: 780px;
  padding: 3rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
`;

export const Title = styled.div`
  display: inline-block;
  color: #343a40;
  margin-bottom: 1.5rem;
  font-size: 3.5rem;
  font-weight: 700;
`;

export const Label = styled.p`
  color: #343a40;
  margin-bottom: 5px;
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 400;
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #f1f3f5;
  border: 0.5px solid #dee2e6;
  border-radius: 3px;
  font-size: 1rem;
  margin-bottom: 4px;
`;
export const SubmitButton = styled.button`
  cursor: pointer;
  display: block;
  color: #fff;
  background-color: #51cf66;
  border-radius: 6px;
  border: none;
  margin-top: 1.5rem;
  width: 32%;
  height: 40px;
  font-size: 1.2rem;
  font-weight: 500;
`;
