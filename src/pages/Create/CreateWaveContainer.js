import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import styled from "@emotion/styled";
import CreatePost from "../../components/Create/CreatePost";
import { createWave } from "../../postApi";
import { getUserData } from "../../modules/SignIn";

const CreateWaveWrap = styled.section`
  width: 1250px;
  display: flex;
  flex-direction: column;
  margin: 120px auto 80px auto;
  background-color: #f8f9fa;
  border: none;
  border-radius: 5px;
  box-shadow: #dee2e6 0 2px 5px;

  @media (max-width: 1300px) {
    width: 100%;
    margin: 100px 0 80px 0;
  }
`;

function CreateWaveContainer({ history }) {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);
  const { isSignIn, error } = useSelector(state => state.signIn);
  const dispatch = useDispatch();

  const postFormData = async () => {
    const form = new FormData();
    for (let props in data) {
      form.append(`${props}`, data[props]);
    }
    try {
      const res = await createWave(form);
      if (res.status === 201) {
        const { id } = await res.json();
        console.log(id);
        history.push(`/post/${id}`);
      }
    } catch (error) {
      alert("서버에 업로드를 실패했습니다.");
    }
  };

  useEffect(() => {
    if (data !== null) {
      postFormData();
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      alert("로그인이 필요합니다.");
      history.push("/");
    } else {
      dispatch(getUserData());
    }
  }, [error]);

  useEffect(() => {
    if (isSignIn) {
      setLogin(true);
    } else {
      if (login) {
        setLogin(false);
        history.push("/");
      }
    }
  }, [isSignIn]);

  return (
    <>
      {login ? (
        <CreateWaveWrap>
          <CreatePost selectDue={DUE} selectPhase={PHASE} sendData={setData} />
        </CreateWaveWrap>
      ) : null}
    </>
  );
}

const PHASE = [
  { label: "3회차", value: 3 },
  { label: "5회차", value: 5 },
  { label: "7회차", value: 7 },
  { label: "9회차", value: 9 },
];
const DUE = [
  { label: "12시간", value: 12 },
  { label: "24시간", value: 24 },
  { label: "48시간", value: 48 },
];

export default withRouter(CreateWaveContainer);
