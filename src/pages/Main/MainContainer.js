import React, { useState } from "react";
import data from "../../data";
import MainPresenter from "./MainPresenter";

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

  return <MainPresenter categories={categories} dataArr={data} />;
};
