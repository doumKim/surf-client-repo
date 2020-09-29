import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { FiLock } from "react-icons/fi";
import {
  Wrapper,
  Box,
  Title,
  Label,
  Input,
  SubmitButton,
} from "../../../constants/formStyles";
import { isPassword } from "../../../constants/AuthCheck";

export default function ChangePwController({ pwChangeApi, userData, close }) {
  const [authData, setAuthData] = useState({
    password: "",
    changePw: "",
    changePw2: "",
  });
  const { password, changePw, changePw2 } = authData;

  const handleChangeApi = e => {
    e.preventDefault();
    const prevPW = userData.password;

    if (password && changePw && changePw2) {
      if (
        prevPW === password &&
        prevPW !== changePw &&
        changePw === changePw2
      ) {
        pwChangeApi(changePw);
        close();
        alert("정보가 수정되었습니다.");
      } else {
        alert("🚨 변경할 패스워드를 확인해주세요.");
      }
    } else {
      alert("🚨 기존 패스워드를 정확하게 입력해주세요.");
    }
  };

  return (
    <Wrapper style={{ width: "420px", height: "600px" }}>
      <Box>
        <Title style={{ marginBottom: "2.5rem" }}>패스워드 변경</Title>
        <CloseOutlined
          style={{
            display: "inline",
            float: "right",
            fontSize: "2rem",
            position: "absolute",
            top: 0,
            right: 0,
            margin: "20px",
          }}
          onClick={close}
        />

        <form style={{ width: "100%", zIndex: 5 }}>
          <Label>기존 패스워드</Label>
          <Input
            onChange={e =>
              setAuthData({ ...authData, password: e.target.value })
            }
            name="password"
            value={password}
            type="password"
          />
          {password ? (
            userData.password === password ? (
              <div style={{ color: "#a9e34b" }}>기존 패스워드와 일치</div>
            ) : (
              <div style={{ color: "#fa5252" }}>
                기존 패스워드를 확인해주세요.
              </div>
            )
          ) : null}
          <Label>
            신규 패스워드{" "}
            <span style={{ fontSize: "14px" }}>(8~10자리 영어, 숫자 조합)</span>
          </Label>
          <Input
            onChange={e =>
              setAuthData({ ...authData, changePw: e.target.value })
            }
            name="changePw"
            value={changePw}
            type="password"
          />
          {changePw ? (
            password !== changePw ? (
              isPassword(changePw) ? null : (
                <div style={{ color: "#fa5252" }}>
                  패스워드 양식을 확인해주세요.
                </div>
              )
            ) : (
              <div style={{ color: "#fa5252" }}>
                기존 패스워드와 동일합니다.
              </div>
            )
          ) : null}
          <Label>신규 패스워드 확인</Label>
          <Input
            onChange={e =>
              setAuthData({ ...authData, changePw2: e.target.value })
            }
            name="changePw2"
            value={changePw2}
            type="password"
          />
          {changePw2 ? (
            changePw === changePw2 ? (
              <div style={{ color: "#a9e34b" }}>패스워드가 일치합니다.</div>
            ) : (
              <div style={{ color: "#fa5252" }}>패스워드가 불일치 합니다.</div>
            )
          ) : null}
          <SubmitButton
            type="submit"
            onClick={handleChangeApi}
            style={{ width: "fit-content", padding: "8px", lineHeight: "1rem" }}
          >
            패스워드 변경하기 <FiLock />
          </SubmitButton>
        </form>
      </Box>
    </Wrapper>
  );
}
