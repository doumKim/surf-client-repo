import React from "react";
import { Link } from "react-router-dom";
import { HeartTwoTone } from "@ant-design/icons";
import {
  CardWrap,
  CardBody,
  CardHead,
  CardBottom,
  CardUser,
  Synopsis,
  Title,
} from "../constants/CardStyle";

function Card({ postData }) {
  return (
    <Link to={`posts/:${postData.postId}/`}>
      <CardWrap>
        <CardHead imageUrl={postData.imageUrl} />
        <CardBody>
          <Title>{postData.title}</Title>
          <Synopsis>{postData.synopsis}</Synopsis>
        </CardBody>
        <CardBottom>
          <CardUser>{postData.username}</CardUser>
          <CardUser style={{ color: "#eb2f96" }}>
            <HeartTwoTone
              style={{ marginRight: "5px" }}
              twoToneColor="#eb2f96"
            />{" "}
            {postData.likes}
          </CardUser>
        </CardBottom>
      </CardWrap>
    </Link>
  );
}

export default function CardList({ postDatas }) {
  <div>
    {postDatas.map(data => (
      <Card key={data.postId} postData={data} />
    ))}
  </div>;
}
