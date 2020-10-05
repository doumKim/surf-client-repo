import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import MypagePresenter from "./MypagePresenter";
import ChangePasswordModal from "../../components/Modal/Auth/ChangePasswordModal";
import { getUserData } from "../../modules/SignIn";
import { myPageInfoAPI } from "../../api";

function MypageContainer({ history }) {
  const { isSignIn, data, error } = useSelector(state => state.signIn);
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();

  const [modal, setModal] = useState({
    isVisible: false,
  });
  const [myPageData, setMyPageData] = useState(null);

  useEffect(() => {
    if (error) {
      alert("로그인이 필요합니다.");
      history.push("/");
    } else {
      dispatch(getUserData());
    }
  }, [error]);

  useEffect(() => {
    const getMyPageInfo = async () => {
      if (isSignIn) {
        setLogin(true);
        try {
          const result = await myPageInfoAPI().then(res => res.json());
          setMyPageData(result);
        } catch (error) {
          alert("서버에서 정보를 가져오는데 실패했습니다.");
          history.push("/");
        }
      } else {
        if (login) {
          setLogin(false);
          history.push("/");
        }
      }
    };

    getMyPageInfo();
  }, [isSignIn]);

  const showModal = isVisible => {
    setModal(prev => ({ ...prev, isVisible }));
  };
  const hideModal = () => {
    setModal(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <>
      {data && myPageData ? (
        <>
          <ChangePasswordModal
            disappear={hideModal}
            data={data}
            modalState={modal}
          />
          <MypagePresenter
            openModal={showModal}
            userData={data}
            myPageData={myPageData}
          />
        </>
      ) : null}
    </>
  );
}

export default withRouter(MypageContainer);
