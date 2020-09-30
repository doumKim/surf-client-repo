import React from "react";
import styled from "@emotion/styled";
import { myPageIconUrl } from "../../constants/SurfIcons";
import { deviceSize } from "../../constants/DiviceSize";

const PostDetaillWrap = styled.section`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-around;
  padding: 2rem;

  @media ${deviceSize.laptop} {
    flex-direction: column;
    align-items: start;
    margin-bottom: 1.4rem;
  }
`;
const PostInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: start;
  max-width: 48%;

  @media (max-width: 1300px) {
    max-width: 40%;
    margin-right: 4rem;
  }
  @media ${deviceSize.laptop} {
    max-width: 100%;
    margin: 0;
  }
`;
const PostTitle = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  background: none;
  color: #343a40;
  margin: 0;
  margin-bottom: 1rem;
  width: fit-content;

  @media ${deviceSize.laptop} {
    font-size: 2.5rem;
    margin-bottom: 0.8rem;
  }
`;
const PostSynop = styled.article`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.3;
  color: #343a40;
`;
const PostWriterWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-around;
  max-width: 48%;

  @media (max-width: 1300px) {
    max-width: 50%;
  }
  @media ${deviceSize.laptop} {
    max-width: 100%;
    margin-top: 2.5rem;
    align-items: start;
    justify-content: start;
  }
`;
const PostFeature = styled.div`
  width: 260px;
  height: fit-content;
  padding: 1rem;
  border: none;
  border-radius: 6px;
  background: inherit;

  display: flex;
  flex-direction: column;
  align-items: start;
  margin-right: 1.3rem;

  img {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    width: 60px;
    height: 60px;
    margin-bottom: 2rem;
    @media (max-width: 1300px) {
      width: 40px;
      height: 40px;
    }
    @media ${deviceSize.mobile} {
      width: 30px;
      height: 30px;
    }
  }
  h3 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 1rem;
    font-weight: 400;
    // @media (max-width: 1300px) {
    //   margin-bottom: 5px;
    //   font-size: 0.9rem;
    // }
    @media ${deviceSize.mobile} {
      font-size: 0.8rem;
      display: inline-block;
    }
  }
  p {
    margin: 0;
    margin-bottom: 4px;
    font-size: 1.2rem;
    font-weight: 600;
    // @media (max-width: 1300px) {
    //   margin-bottom: 5px;
    //   font-size: 1rem;
    // }
    @media ${deviceSize.mobile} {
      font-size: 1rem;
      display: inline-block;
    }
  }
  // div {
  //   margin-top: 12px;
  // }
  &:hover {
    box-shadow: #ced4da 0 2px 5px;
    transition: box-shadow 0.4s ease;
  }
  @media (max-width: 1300px) {
    width: 200px;
  }
  @media ${deviceSize.tablet} {
    width: 200px;
    margin: 0;
  }
  @media ${deviceSize.mobile} {
    width: 160px;
  }
`;

const PostTag = styled.div`
  display: inline-block;
  margin-right: 3px;
  font-size: 0.8rem;
  padding: 5px;
  border: none;
  color: #fff;
  border-radius: 2px;
  background-color: ${props => {
    const colorIdx = CATEGORIES.indexOf(props.category);
    return COLORS[colorIdx];
  }};
`;

export default function PostDetailInfo({ postData }) {
  return (
    <PostDetaillWrap>
      <PostInfoWrap>
        <PostTitle category={postData.categories}>{postData.title}</PostTitle>
        <PostSynop>{postData.synopsis}</PostSynop>
      </PostInfoWrap>
      <PostWriterWrap>
        <PostFeature>
          <img src={myPageIconUrl.write} alt="writer" />
          <h3>메이커 서퍼</h3>
          <p>{postData.username}</p>
        </PostFeature>
        <PostFeature>
          <img src={myPageIconUrl.category} alt="category" />
          <h3>파도 장르</h3>
          <div>
            {postData.categories.map((category, i) => (
              <PostTag key={i} category={category}>
                {category}
              </PostTag>
            ))}
          </div>
        </PostFeature>
        <PostFeature>
          <img src={myPageIconUrl.create_at} alt="create_at" />
          <h3>파도 생성일</h3>
          <p>{postData.created_at}</p>
        </PostFeature>
      </PostWriterWrap>
    </PostDetaillWrap>
  );
}

const COLORS = [
  "#e67700",
  "#ae3ec9",
  "#ff8787",
  "#228be6",
  "#0ca678",
  "#0ca678",
  "#ffd43b",
];
const CATEGORIES = ["무협", "판타지", "로맨스", "SF", "현대", "게임", "스포츠"];
