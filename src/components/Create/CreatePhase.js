import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { deviceSize } from "../../constants/DiviceSize";
import { postPhaseWave, removeCurrentJoinUser } from "../../postApi";
import { withRouter } from "react-router-dom";

const CreatePhaseWrap = styled.section`
  width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  margin: 120px auto 80px auto;
  border: none;
  border-radius: 5px;

  @media (max-width: 1300px) {
    width: 100%;
    margin: 120px 0 80px 0;
  }
  @media ${deviceSize.laptop} {
    flex-direction: column-reverse;
    margin: 100px 0 40px 0;
  }
`;
const PhaseWrap = styled.section`
  width: 48%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #f8f9fa;
  box-shadow: #dee2e6 0 2px 5px;

  @media (max-width: 1300px) {
    width: 46%;
  }

  @media ${deviceSize.laptop} {
    width: 100%;
    margin-top: 2rem;
  }
`;
const PhaseInfoWrap = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 12px;
    width: fit-content;
    margin-bottom: 1rem;
  }
  input {
    background: none;
    border: 1px solid #343a40;
    margin-bottom: 2rem;
    padding: 8px;
    font-size: 1.2rem;
    border-radius: 3px;

    &:focus {
      outline: 1px solid #66d9e8;
    }
  }

  // box-shadow: #ced4da 0 2px 2px;
`;
const PostLabel = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 1rem;
  width: fit-content;
  margin-top: 2rem;

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
const PhaseTextArea = styled.textarea`
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
    outline: 1px solid #66d9e8;
  }
`;
const LastPhaseArea = styled.article`
  width: 100%;
  background: none;
  font-size: 1.3rem;
  border: none;
  line-height: 1.5;
  border-radius: 3px;
  margin-bottom: 2rem;
`;
const CreatePhaseButton = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 12px;

  background-color: ${props => (props.send === "on" ? "#339af0" : "#dee2e6")};
  color: ${props => (props.send === "on" ? "#fff" : "#495057")};

  &:hover {
    box-shadow: #ced4da 0 2px 5px;
    transition: box-shadow 0.4s ease;
  }

  transition: background-color 0.4s ease, color 0.4s ease;
`;

function CreatePhase({ data, history, match }) {
  const [open, setOpen] = useState(false);

  const [inputs, setInputs] = useState({
    sub_title: "",
    text: "",
  });

  useEffect(() => {
    if (!data) {
      removeCurrentJoinUser(data.post_id);
      history.push(`/post/${match.params.id}`);
    }
  }, []);

  const onChange = e => {
    const { name, value } = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name]: value,
    }));
  };

  const postPhase = e => {
    e.preventDefault();
    postPhaseWave(
      data.post_id,
      data.current_phase,
      JSON.stringify(inputs)
    ).then(res => {
      if (res.status === 201) {
        // 작성 완료 후 상세 페이지로 이동해주는 코드
        history.push(`/post/${data.post_id}`);
      } else {
        alert("입력 정보를 잘 확인해주세요.");
      }
    });
  };
  return (
    <>
      <CreatePhaseWrap>
        <PhaseWrap>
          <PhaseInfoWrap>
            <h2 style={{ color: "#339af0", borderBottom: "4px solid #339af0" }}>
              {data.current_phase + 1}회차
            </h2>
            <PostLabel>
              소제목 작성<span>[option]</span>
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
                onChange={onChange}
                value={inputs.sub_title}
              />
            )}
          </PhaseInfoWrap>
          <PostLabel>{data.current_phase + 1} 회차 내용</PostLabel>
          <PhaseTextArea
            name="text"
            value={inputs.text}
            onChange={onChange}
            maxLength="6000"
            style={{ height: "600px" }}
          />
          {inputs.text.length > 100 ? (
            <CreatePhaseButton send="on" onClick={postPhase}>
              파도 이어가기
            </CreatePhaseButton>
          ) : (
            <CreatePhaseButton>파도 이어가기</CreatePhaseButton>
          )}
        </PhaseWrap>
        <PhaseWrap>
          <PhaseInfoWrap>
            <h2
              style={{ color: "#adb5bd", borderBottom: "4px solid #adb5bd" }}
              last="on"
            >
              {data.current_phase}회차
            </h2>
            <PostLabel>{data.sub_title}</PostLabel>
          </PhaseInfoWrap>
          {data.text.split("\n").map((el, i) => (
            <LastPhaseArea key={i}>{el}</LastPhaseArea>
          ))}
        </PhaseWrap>
      </CreatePhaseWrap>
    </>
  );
}

export default withRouter(CreatePhase);
