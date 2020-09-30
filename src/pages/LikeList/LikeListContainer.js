import React from "react";
import data from "../../data";
import LikeListPresenter from "./LikeListPresenter";

export default () => {
  const categories = [
    "무협",
    "판타지",
    "로맨스",
    "SF",
    "현대",
    "게임",
    "스포츠",
  ];

  return (
    <LikeListPresenter
      categories={categories}
      dataArr={data.filter(el => el.likes % 2).slice(0, 2)}
    />
  );
};
