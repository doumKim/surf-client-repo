import React from "react";
import CreateWavePresenter from "./CreateWavePresenter";

export default function CreateWaveContainer() {
  return (
    <>
      <CreateWavePresenter category={CATEGORIES} />
    </>
  );
}

const CATEGORIES = [
  { label: "무협", value: "무협" },
  { label: "판탄지", value: "판탄지" },
  { label: "로맨스", value: "로맨스" },
  { label: "SF", value: "SF" },
  { label: "현대", value: "현대" },
  { label: "게임", value: "게임" },
  { label: "스포츠", value: "스포츠" },
];
