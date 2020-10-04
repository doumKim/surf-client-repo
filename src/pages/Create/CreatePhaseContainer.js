import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhase, getWaveDetail, removeCurrentJoinUser } from "../../postApi";
import { getUserData } from "../../modules/SignIn";
import CreatePhasePresenter from "./CreatePhasePresenter";

export default function CreatePhaseContainer({ match, history }) {
  const [phaseData, setPhaseData] = useState(null);
  const { isSignIn, error, data } = useSelector(state => state.signIn);
  const dispatch = useDispatch();
  const postId = match.params.id;

  const verifyPermission = async () => {
    try {
      const result = await getWaveDetail(postId).then(res => res.json());
      if (result.current_join_user !== data.id) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  const getPrevPhaseData = async () => {
    const data = await getPhase(postId, match.params.phase - 1).then(res =>
      res.json()
    );

    setPhaseData(data);
  };

  useEffect(() => {
    if (error) {
      alert("로그인이 필요합니다.");
      history.push(`/post/${postId}`);
    } else {
      dispatch(getUserData());
    }
  }, [error]);

  useEffect(() => {
    const initPhase = async () => {
      if (isSignIn) {
        const verified = await verifyPermission();
        if (verified) {
          window.addEventListener(
            "beforeunload",
            removeCurrentJoinUser(postId)
          );

          getPrevPhaseData();
        } else {
          alert("권한이 없습니다.");
          history.push(`/post/${postId}`);
        }
      } else {
        alert("권한이 없습니다.");
        removeCurrentJoinUser(postId);
        history.push(`/post/${postId}`);
      }
    };

    initPhase();
  }, [isSignIn]);

  useEffect(() => {
    return () => {
      removeCurrentJoinUser(postId);
      window.removeEventListener("beforeunload", removeCurrentJoinUser(postId));
    };
  }, []);

  return (
    <>
      {isSignIn && phaseData ? (
        <>
          <CreatePhasePresenter phaseData={phaseData} />
          <div onClick={() => removeCurrentJoinUser(postId)}>권한해제</div>
        </>
      ) : null}
    </>
  );
}
