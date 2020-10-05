import React, { useRef } from "react";
import { ModalBackground } from "../../../constants/modalStyles";
import ChangePwController from "./ChangePwController";

export default function ChangePasswordModal({ data, disappear, modalState }) {
  let ref = useRef(null);

  const handleWindowPress = e => {
    if (ref.current === e.target) {
      disappear();
    }
  };

  if (!modalState.isVisible) {
    return null;
  } else {
    return (
      <ModalBackground ref={ref} onClick={handleWindowPress}>
        <ChangePwController close={disappear} userData={data} />
      </ModalBackground>
    );
  }
}
