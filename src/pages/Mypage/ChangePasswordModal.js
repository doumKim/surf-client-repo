import React, { useRef } from "react";
import { DarkBack } from "../Auth/Modal";
import ChangePassword from "./ChangePassword";

export default function ChangePasswordModal({
  api,
  data,
  disappear,
  modalState,
}) {
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
      <DarkBack ref={ref} onClick={handleWindowPress}>
        <ChangePassword pwChangeApi={api} close={disappear} userData={data} />
      </DarkBack>
    );
  }
}
