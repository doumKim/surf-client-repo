import React, { useState } from "react";
import styled from "@emotion/styled";
import { lighten } from "polished";

const PostAreaWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem 2rem;
`;
const PostPhaseLabel = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 12px;
  margin-bottom: 1rem;
  width: fit-content;

  span {
    color: #495057;
    font-size: 1.2rem;
    margin-left: 10px;
  }
`;
const PhaseTapWrap = styled.ul`
  height: 50px;
  display: flex;
  align-items: center;
`;
const PhaseTap = styled.li`
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  // text-align: center;
  width: 100px;
  border: none;
  padding: 1rem 1rem 1rem 0;
  margin-right: 10px;

  &:after {
    content: "";
    display: block;
    margin: 7px 0;
    width: 45px;
    border-bottom: 3px solid
      ${props => {
        if (props.cur === "cur") return "#339af0";
        else return "#f8f9fa";
      }};
  }
  transition: all 0.4s linear;

  color: ${props => {
    if (props.cur === "cur") return "#339af0";
    else return "#868e96";
  }};

  &:hover {
    transform: scale(1.1);
    transition: transform 0.4s linear;
  }
`;
const PhaseDetail = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0 1rem 0;
  width: 100%;

  h3 {
    display: inline;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: #495057;
    margin-right: 2rem;
  }

  button {
    padding: 12px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    text-align: center;
    border: none;
    border-radius: 5px;
    background-color: #228be6;
    cursor: pointer;
    &:hover {
      background: ${lighten(0.05, "#228be6")};
      box-shadow: #1864ab 0 1px 4px;
      transition: all 0.4s ease;
    }
    &:focus {
      outline: none;
    }
  }
`;
const PhasePostWrap = styled.article`
  padding: 12px;
  border: 0.5px solid #343a40;
  background: none;
  border-radius: 3px;
  width: 100%;

  font-size: 1.2rem;
  line-height: 1.5;

  article {
    margin-top: 8px;
  }
`;

export default function PostArea({ data }) {
  const [tabIdx, setTabIdx] = useState(data.posts.length - 1);

  return (
    <PostAreaWrap>
      <PostPhaseLabel>
        회차 <span>( 총 {data.max_phase}회 )</span>
      </PostPhaseLabel>
      <PhaseTapWrap>
        {data.posts.map((post, idx) => {
          if (idx === tabIdx) {
            return (
              <PhaseTap cur="cur" onClick={() => setTabIdx(idx)} key={idx}>
                {post.phase}
              </PhaseTap>
            );
          } else {
            return (
              <PhaseTap onClick={() => setTabIdx(idx)} key={idx}>
                {post.phase}
              </PhaseTap>
            );
          }
        })}
      </PhaseTapWrap>
      <PhaseDetail>
        <div>
          <h3>"{data.posts[tabIdx].subtitle}"</h3>
          <h3
            style={{
              borderLeft: "3px solid #495057",
              paddingLeft: "10px",
              height: "fit-content",
            }}
          >
            {data.posts[tabIdx].writer}
          </h3>
        </div>
        <button>파도 이어가기</button>
      </PhaseDetail>
      <PhasePostWrap>
        {data.posts[tabIdx].post.split("\n").map((el, i) => (
          <article key={i}>{el}</article>
        ))}
      </PhasePostWrap>
    </PostAreaWrap>
  );
}
