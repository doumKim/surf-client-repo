import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { getPhase, getWaveDetail } from "../../postApi";
import { getUserData } from "../../modules/SignIn";
import CreatePhasePresenter from "./CreatePhasePresenter";

export default function CreatePhaseContainer({ match, history }) {
  const [phaseData, setPhaseData] = useState(null);
  const [login, setLogin] = useState(false);
  const { isSignIn, error, data } = useSelector(state => state.signIn);
  const dispatch = useDispatch();
  const postId = match.params.id;

  const verifyPermission = async () => {
    console.log(postId);
    try {
      const result = await getWaveDetail(postId).then(res => res.json());
      if (result.current_join_user !== data.id) {
        history.push(`/post/${postId}`);
      }
    } catch (error) {
      history.push(`/post/${postId}`);
    }
  };

  const getPrevPhaseData = async () => {
    const data = await getPhase(
      match.params.id,
      match.params.phase - 1
    ).then(res => res.json());

    setPhaseData(data);
  };

  useEffect(() => {
    if (error) {
      alert("로그인이 필요합니다.");
      history.push(`/post/${match.params.id}`);
    } else {
      dispatch(getUserData());
    }
  }, [error]);

  useEffect(() => {
    const initPhase = async () => {
      if (isSignIn) {
        setLogin(true);
        await verifyPermission();
        await getPrevPhaseData();
      } else {
        if (login) {
          setLogin(false);
          history.push("/");
        }
      }
    };

    initPhase();
  }, [isSignIn]);

  return (
    <>
      {isSignIn && phaseData ? (
        <CreatePhasePresenter phaseData={phaseData} />
      ) : null}
    </>
  );
}
