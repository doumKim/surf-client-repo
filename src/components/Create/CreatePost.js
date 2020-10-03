import React, { useState } from "react";
import styled from "@emotion/styled";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { lighten } from "polished";
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
  width: 24%;
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
    width: 88%;
    flex-direction: row;
    align-items: center;
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
const CreatePostWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem 2rem;
`;
const PostSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;

  input {
    background: none;
    border: 1px solid #343a40;
    margin-bottom: 2rem;
    padding: 8px;
    font-size: 1.2rem;
    border-radius: 3px;

    &:focus {
      outline: 1px solid ${lighten(0.04, "#66d9e8")};
    }
  }
`;
const PostLabel = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 1rem;
  width: fit-content;

  span {
    font-size: 1.2rem;
    font-weight: 400;
    color: #495057;
  }

  button {
    cursor: pointer;
    padding: 5px;
    text-align: center;
    height: 100%;
    border: none;
    border-radius: 3px;
    background-color: #edf2ff;
    color: #495057;
    width: 25px;
    height: 25px;
    font-size: 14px;
    font-weight: 700;
    margin-left: 15px;

    &:hover {
      background-color: #d0ebff;
      box-shadow: #dee2e6 1px 1px 4px;
      transition: box-shadow 0.4s ease;
    }
  }
`;
const PostArea = styled.textarea`
  width: 100%;

  font: inherit;
  max-width: 100%;
  background: none;
  font-size: 1.3rem;
  padding: 0.8rem;
  border: 1px solid #343a40;
  line-height: 1.5;
  border-radius: 3px;
  margin-bottom: 2rem;

  &:focus {
    outline: 1px solid ${lighten(0.04, "#66d9e8")};
  }
`;

const CreateWaveButton = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 12px;
  float: right;
  margin-bottom: 1rem;

  background-color: ${props => (props.send === "on" ? "#339af0" : "#dee2e6")};
  color: ${props => (props.send === "on" ? "#fff" : "#495057")};

  &:hover {
    box-shadow: #ced4da 0 2px 5px;
    transition: box-shadow 0.4s ease;
  }

  transition: background-color 0.4s ease, color 0.4s ease;
`;

export default function CreatePost({
  category,
  selectPhase,
  selectDue,
  sendData,
}) {
  const [open, setOpen] = useState(false);
  const [genre, setGenre] = useState("");
  const [maxPhase, setMaxPhase] = useState("");
  const [waveData, setWaveData] = useState({
    title: "",
    sub_title: "",
    synopsis: "",
    text: "",
    title_image: null,
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setWaveData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleImage = e => {
    const { name, files } = e.target;
    setWaveData(prev => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const clickSendData = e => {
    e.preventDefault();
    const data = {
      ...waveData,
      categories: genre.join(","), // -> 문자열 변환
      maxPhase: maxPhase.value,
    };
    // console.log(data);
    sendData(data);
  };

  return (
    <>
      <WaveHeadWrap>
        <WaveTitle>
          <input
            onChange={handleChange}
            name="title"
            value={waveData.title}
            placeholder="제목을 입력해주세요"
          />
          <div></div>
        </WaveTitle>
        <WaveSelectWrap>
          <WaveSelect>
            <WaveSelectLabel>카테고리 설정</WaveSelectLabel>
            <Select
              onChange={selectedOption =>
                setGenre(selectedOption.map(el => el.value))
              }
              value={category.value}
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              styles={selectStyle}
              options={category}
            />
          </WaveSelect>
          <WaveSelect>
            <WaveSelectLabel>이미지 업로드</WaveSelectLabel>
            <input
              name="title_image"
              onChange={handleImage}
              type="file"
              accept="image/jpg,image/png,image/jpeg,image/gif"
            />
          </WaveSelect>
          <WaveSelect>
            <WaveSelectLabel>총 회차 설정</WaveSelectLabel>
            <Select
              onChange={selectedOption => setMaxPhase(selectedOption)}
              options={selectPhase}
              styles={selectStyle}
            />
          </WaveSelect>
          <WaveSelect>
            <WaveSelectLabel>회차 당 마감시간</WaveSelectLabel>
            <Select options={selectDue} styles={selectStyle} />
          </WaveSelect>
        </WaveSelectWrap>
      </WaveHeadWrap>
      <CreatePostWrap>
        <PostSection>
          <PostLabel>
            소제목 입력 <span>[옵션]</span>{" "}
            <button>
              {open ? (
                <MdKeyboardArrowUp onClick={() => setOpen(false)} />
              ) : (
                <MdKeyboardArrowDown onClick={() => setOpen(true)} />
              )}
            </button>
          </PostLabel>
          {open && (
            <input
              name="sub_title"
              onChange={handleChange}
              value={waveData.sub_title}
            />
          )}
        </PostSection>
        <PostSection>
          <PostLabel>시놉시스</PostLabel>
          <PostArea
            onChange={handleChange}
            name="synopsis"
            value={waveData.synopsis}
            maxLength="200"
            style={{ height: "150px" }}
          />
        </PostSection>
        <PostSection>
          <PostLabel>파도 일으키기</PostLabel>
          <PostArea
            onChange={handleChange}
            name="text"
            value={waveData.text}
            maxLength="3000"
            style={{ height: "400px" }}
          />
        </PostSection>
        {waveData.synopsis.length !== 0 && waveData.text.length !== 0 ? (
          <CreateWaveButton send="on" onClick={clickSendData}>
            파도 일으키기
          </CreateWaveButton>
        ) : (
          <CreateWaveButton>파도 일으키기</CreateWaveButton>
        )}
      </CreatePostWrap>
    </>
  );
}
