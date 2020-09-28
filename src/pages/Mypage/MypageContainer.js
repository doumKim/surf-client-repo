import React from "react";
import MypagePresenter from "./MypagePresenter";

export default function MypageContainer() {
  const changeUserDataApi = datas => {
    console.log(datas);
  };

  return (
    <>
      <MypagePresenter
        userData={USERDATA_SAMPLE}
        changeImgApi={changeUserDataApi}
      />
    </>
  );
}
const USERDATA_SAMPLE = {
  avatar_url:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYieM1wd1ScKyQR9OXbwnLkloYvD9QXNpbGA&usqp=CAU",
  email: "dobby@dobby.com",
  surfer_name: "dobby377",
  username: "dobby_is_free",
  surfs: 6,
  join_surfs: 2,
  lv: 1,
  like: 3,
};
