import React from "react";
import styled from "@emotion/styled";
import CreateWaveHead from "../../components/Create/CreateWaveHead";
import CreatePost from "../../components/Create/CreatePost";

const CreateWaveWrap = styled.section`
  width: 1250px;
  display: flex;
  flex-direction: column;
  margin: 120px auto 80px auto;
  background-color: #f8f9fa;
  border: none;
  border-radius: 5px;
  box-shadow: #dee2e6 0 2px 5px;

  @media (max-width: 1300px) {
    width: 100%;
    margin: 100px 0 80px 0;
  }
`;

export default function CreateWavePresenter({ category }) {
  return (
    <>
      <CreateWaveWrap>
        <CreateWaveHead
          selectDue={DUE}
          selectPhase={PHASE}
          category={category}
        />
        <CreatePost />
      </CreateWaveWrap>
    </>
  );
}

const PHASE = [
  { label: "3회차", value: 3 },
  { label: "5회차", value: 5 },
  { label: "7회차", value: 7 },
  { label: "9회차", value: 9 },
];
const DUE = [
  { label: "12시간", value: 12 },
  { label: "24시간", value: 24 },
  { label: "48시간", value: 48 },
];
