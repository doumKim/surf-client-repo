import React, { useState } from "react";
import styled from "@emotion/styled";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { lighten } from "polished";

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

export default function CreatePost() {
  const [open, setOpen] = useState(false);
  const [subtitle, setSubtitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [mainPost, setMainPost] = useState("");

  return (
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
          <input onChange={e => setSubtitle(e.target.value)} value={subtitle} />
        )}
      </PostSection>
      <PostSection>
        <PostLabel>시놉시스</PostLabel>
        <PostArea
          onChange={e => setSynopsis(e.target.value)}
          value={synopsis}
          maxLength="400"
          style={{ height: "150px" }}
        />
      </PostSection>
      <PostSection>
        <PostLabel>파도 일으키기</PostLabel>
        <PostArea
          onChange={e => setMainPost(e.target.value)}
          value={mainPost}
          maxLength="6000"
          style={{ height: "400px" }}
        />
      </PostSection>
      {synopsis.length !== 0 && mainPost.length !== 0 ? (
        <CreateWaveButton send="on">파도 일으키기</CreateWaveButton>
      ) : (
        <CreateWaveButton>파도 일으키기</CreateWaveButton>
      )}
    </CreatePostWrap>
  );
}
