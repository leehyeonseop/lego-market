import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormGroup from "./FormGroup";
import styled from "styled-components";

const JoinMember = styled.form`
  max-width: 500px;
  margin: 50px auto;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 24px;
  color: #767676;
  text-align: center;
  margin: 0 0 40px;
`;

const BtnNext = styled.button`
  width: 100%;
  height: 44px;
  background: ${(props) => props.bg};
  color: #fff;
  border-radius: 44px;
  cursor: pointer;
  transform: all 0.3s;
  border: none;
  margin-top: 10px;
  font-weight: 500;
  font-size: 16px;
`;

function JoinMembership() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onChangeEmail = (e) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!e.target.value || emailRegex.test(e.target.value))
      setEmailError(false);
    else setEmailError(true);

    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!e.target.value || e.target.value.length >= 6) {
      setPasswordError(false);
      e.preventDefault();
    } else setPasswordError(true);

    setPassword(e.target.value);
  };

  const validation = async () => {
    if (!email) {
      setEmailError(true);
    }
    if (!password) {
      setPasswordError(true);
    }

    const emailCheckedResult = await checkEmailValid(email);
    if (!emailCheckedResult) {
      return false;
    }

    if (!emailError && !passwordError) return true;
    else return false;
  };

  const onSubmit = (e) => {
    if (validation()) {
      navigate("/sign");
    }
  };

  async function checkEmailValid(email) {
    const reqData = {
      user: {
        email: email,
      },
    };

    const res = await fetch(
      "https://mandarin.api.weniv.co.kr/user/emailvalid",
      {
        method: "POST",

        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify(reqData),
      }
    );

    const json = await res.json();
    console.log(json);

    if (json.message == "사용 가능한 이메일 입니다.") {
      return true;
    } else {
      alert(json.message);
      return false;
    }
  }
  return (
    <JoinMember>
      <Title>이메일로 회원가입</Title>
      <FormGroup
        email={email}
        password={password}
        emailError={emailError}
        passwordError={passwordError}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
      />
      <BtnNext bg="#FFC85F" type="button" onClick={onSubmit}>
        다음
      </BtnNext>
    </JoinMember>
  );
}

export default JoinMembership;
