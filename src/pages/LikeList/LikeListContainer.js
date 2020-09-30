import React from "react";
import data from "../../data";
import LikeListPresenter from "./LikeListPresenter";

export default () => {
  return (
    <LikeListPresenter dataArr={data.filter(el => el.likes % 2).slice(0, 2)} />
  );
};
