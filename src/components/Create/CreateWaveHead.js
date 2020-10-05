import React, { useState } from "react";
import styled from "@emotion/styled";
import Select from "react-select";
import { selectStyle } from "../../constants/SelectStyle";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const WaveHeadWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2rem;
  margin-bottom: 1rem;

  box-shadow: #ced4da 0 2px 2px;
`;
const WaveTitle = styled.section`
  border: none;
  background: none;
  padding-bottom: 0.8rem;
  width: 100%;
  margin-bottom: 1rem;

  input {
    width: 100%;
    display: block;
    padding: 12px;
    background: none;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    font-size: 2rem;
    color: #495057;
    &:focus {
      outline: none;
    }
    &::-webkit-input-placeholder {
      color: #495057;
      opacity: 0.4;
      font-weight: 600;
    }
    &:-ms-input-placeholder {
      color: #495057;
      opacity: 0.4;
      font-weight: 600;
    }
  }

  div {
    display: block;
    width: 80px;
    border: none;
    background: none;
    margin: 10px 0 0 12px;
    border-bottom: 6px solid #228be6;
  }
`;
const WaveSelectLabel = styled.label`
  font-size: 1.3rem;
  font-weight: 500;
  padding-bottom: 12px;
  width: fit-content;
`;
const WaveSelectWrap = styled.section`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;
const WaveSelect = styled.section`
  width: 50%;
  height: fit-content;
  padding: 8px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: start;
  align-items: start;

  &:hover {
    box-shadow: #ced4da 0 2px 5px;
    transition: box-shadow 0.4s ease;
  }

  @media (max-width: 1300px) {
    display: grid
    grid-template-columns: 1fr 4fr;
    width: 100%;
    // flex-direction: row;
    // align-items: center;
    height: 80px;

    label {
      padding: 0;
      margin-right: 15px;
    }
  }
  input {
    font-size: 1rem;
    padding: 5px 0;
  }
`;

export default function CreateWaveHead({ category, selectPhase, selectDue }) {
  const [title, setTitle] = useState("");

  return (
    <WaveHeadWrap>
      <WaveTitle>
        <input
          onChange={e => setTitle(e.target.value)}
          value={title}
          placeholder="제목을 입력해주세요"
        />
        <div></div>
      </WaveTitle>
      <WaveSelectWrap>
        <WaveSelect>
          <WaveSelectLabel>카테고리 설정</WaveSelectLabel>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={category[0]}
            isMulti
            styles={selectStyle}
            options={category}
          />
        </WaveSelect>
        <WaveSelect>
          <WaveSelectLabel>이미지 업로드</WaveSelectLabel>
          <input
            type="file"
            accept="image/jpg,image/png,image/jpeg,image/gif"
          />
        </WaveSelect>

        <WaveSelect>
          <WaveSelectLabel>총 회차 설정</WaveSelectLabel>
          <Select
            options={selectPhase}
            defaultValue={selectPhase[0]}
            styles={selectStyle}
          />
        </WaveSelect>
        <WaveSelect>
          <WaveSelectLabel>회차 당 마감시간</WaveSelectLabel>
          <Select
            options={selectDue}
            defaultValue={selectDue[0]}
            styles={selectStyle}
          />
        </WaveSelect>
      </WaveSelectWrap>
    </WaveHeadWrap>
  );
}
