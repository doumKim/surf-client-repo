import React, { useState } from "react";
import styled from "@emotion/styled";
import { deviceSize } from "../../constants/DiviceSize";
import { useSelector } from "react-redux";
import { getWaveDetail, getPhase, createCurrentJoinUser } from "../../postApi";
import { withRouter } from "react-router-dom";

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
  @media (max-width: 760px) {
    font-size: 1.2rem;
    span {
      font-size: 0.8rem;
    }
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

  @media ${deviceSize.tablet} {
    font-size: 1.2rem;
    width: 60px;
  }
  @media ${deviceSize.mobile} {
    font-size: 1rem;
    width: 40px;
  }
`;
const PhaseDetail = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0 1rem 0;
  width: 100%;
  margin-bottom: 1rem;
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
    text-align: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:focus {
      outline: none;
    }
    @media ${deviceSize.tablet} {
      margin-top: 1rem;
      font-size: 12px;
      padding: 8px;
    }
  }
  @media ${deviceSize.tablet} {
    align-items: start;
    flex-direction: column;
  }
`;
const PhasePostWrap = styled.article`
  padding: 12px;
  border: 0.5px solid #343a40;
  background: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 1rem;

  font-size: 1.2rem;
  line-height: 1.5;
  line-break: anywhere;

  article {
    margin-top: 8px;
  }

  @media ${deviceSize.tablet} {
    font-size: 1rem;
  }
`;

function PostArea({ postData, history }) {
  const [tabIdx, setTabIdx] = useState(postData.current_phase);
  const { isSignIn } = useSelector(state => state.signIn);

  const handleClick = async e => {
    e.preventDefault();
    if (!isSignIn) {
      alert("로그인이 필요한 기능입니다.");
    } else {
      try {
        await createCurrentJoinUser(postData.id);
        history.push(`/post/${postData.id}/${postData.current_phase + 1}`);
      } catch (error) {
        alert("권한을 받을 수 없습니다.");
      }
    }
  };

  // console.log(phaseData, postData);
  return (
    <>
      {/* {phaseData.length !== 0 ? ( */}
      <PostAreaWrap>
        <PostPhaseLabel>
          회차 <span>( 총 {postData.max_Phase}회 )</span>
        </PostPhaseLabel>
        <PhaseTapWrap>
          {postData.phase_waves.map((post, index) => {
            if (post.current_phase === tabIdx) {
              return (
                <PhaseTap
                  cur="cur"
                  onClick={() => setTabIdx(post.current_phase)}
                  key={index}
                >
                  {post.current_phase}
                </PhaseTap>
              );
            } else {
              return (
                <PhaseTap
                  onClick={() => setTabIdx(post.current_phase)}
                  key={index}
                >
                  {post.current_phase}
                </PhaseTap>
              );
            }
          })}
        </PhaseTapWrap>
        <PhaseDetail>
          <div>
            <h3>
              {postData.phase_waves[tabIdx - 1].sub_title
                ? postData.phase_waves[tabIdx - 1].sub_title
                : "무제"}
            </h3>
          </div>
          {/* login.isSignIn && */}
          {postData.max_Phase > postData.current_phase &&
          postData.current_join_user === null &&
          isSignIn ? (
            // -> 클릭했을때 -> current_join_user가 0이면 클릭 가능
            <button
              style={{
                backgroundColor: "#228be6",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              파도 이어가기
            </button>
          ) : (
            <button
              disabled
              style={{ backgroundColor: "#ced4da", color: "#868e96" }}
            >
              파도 이어가기
            </button>
          )}
        </PhaseDetail>
        <PhasePostWrap>
          {postData.phase_waves[tabIdx - 1].text.split("\n").map((el, i) => (
            <article key={i}>{el}</article>
          ))}
        </PhasePostWrap>
      </PostAreaWrap>
      {/* // ) : null} */}
    </>
  );
}

export default withRouter(PostArea);
