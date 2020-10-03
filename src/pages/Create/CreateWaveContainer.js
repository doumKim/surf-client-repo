import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import CreatePost from "../../components/Create/CreatePost";
import { createWave } from "../../postApi";

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

export default function CreateWaveContainer() {
  const [data, setData] = useState(null);
  const [state, setState] = useState(false);

  useEffect(() => {
    if (data !== null) {
      // data를 new FormData로 업롣드.
      console.log(data);
      const form = new FormData();
      for (let props in data) {
        form.append(`${props}`, data[props]);
      }
      for (var key of form.keys()) {
        console.log(key);
      }
      for (var value of form.values()) {
        console.log(value);
      }
      createWave(form)
        .then(res => {
          if (res.status === 200) {
            setState(true);
          }
        })
        .catch(alert("모든 정보를 입력해주세요."));
    }
  }, [data]);
  return (
    <CreateWaveWrap>
      <CreatePost
        selectDue={DUE}
        selectPhase={PHASE}
        category={CATEGORIES}
        sendData={setData}
      />
    </CreateWaveWrap>
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
const CATEGORIES = [
  { label: "무협", value: "무협" },
  { label: "판타지", value: "판타지" },
  { label: "로맨스", value: "로맨스" },
  { label: "SF", value: "SF" },
  { label: "현대", value: "현대" },
  { label: "게임", value: "게임" },
  { label: "스포츠", value: "스포츠" },
];
