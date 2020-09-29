import React, { useCallback, useState } from "react";
import MypagePresenter from "./MypagePresenter";
import ChangePasswordModal from "./ChangePasswordModal";

export default function MypageContainer() {
  const [modal, setModal] = useState({
    isVisible: false,
  });
  const showModal = isVisible => {
    setModal(prev => ({ ...prev, isVisible }));
  };

  const hideModal = () => {
    setModal(prev => ({ ...prev, isVisible: false }));
  };

  const changeUserDataApi = useCallback(datas => {
    console.log(datas);
  }, []);
  return (
    <>
      <ChangePasswordModal
        disappear={hideModal}
        api={changeUserDataApi}
        data={USERDATA_SAMPLE}
        modalState={modal}
      />
      <MypagePresenter
        openModal={showModal}
        userData={USERDATA_SAMPLE}
        changeImgApi={changeUserDataApi}
      />
    </>
  );
}
const USERDATA_SAMPLE = {
  password: "qwer1234",
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
