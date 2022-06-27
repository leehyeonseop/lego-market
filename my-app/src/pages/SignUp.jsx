import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import styled from "styled-components";

function SignUp() {
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
      // API Call
      //console.log(email);
      //console.log(password);
      navigate("/sign");
    }
  };

  // email 중복 검사 함수
  async function checkEmailValid(email) {
    //계정검증 Request시 body에 들어가는 데이터
    const reqData = {
      user: {
        email: email,
      },
    };

    // res에는 fetch가 반환해준 Promise객체가 담김.
    // fetch(전송할 때 필요한 정확한 주소, 전송할 때 함께 보내는 정보 객체)
    const res = await fetch(
      "https://mandarin.api.weniv.co.kr/user/emailvalid",
      {
        //method : 옵션을 POST로 지정해주고
        method: "POST",
        //headers 옵션을 통해 JSON 포멧을 사용한다고 알려줘야 한다
        //서버에게 어떤 형식의 데이터가 실제로 보내지는 것인지 알려주는 용도
        //application/json : 애플리케이션간 데이터 통신에서 JSON형식이 사용된다라는 의미
        headers: {
          "Content-type": "application/json",
        },
        //요청 전문을 JSON 포멧으로 직렬화
        //가장 중요한 body 옵션에 설정해줍니다.
        //아까 만들어준 reqData를 stringify로 직렬화하여 body에 담아줌
        body: JSON.stringify(reqData),
      }
    );
    // console.log(res);

    // json에는 전달받은 res(Promise객체)를 json 형식으로 바꾼 것을 담아준다
    const json = await res.json();
    console.log(json);

    //json.message로 접근했을 때
    //성공했을 때
    //"사용 가능한 계정ID 입니다."
    //만일 message가 사용가능한 계정일 경우 true를 반환
    if (json.message == "사용 가능한 이메일 입니다.") {
      return true;
    } else {
      alert(json.message);
      return false;
    }
  }

  return (
    <form className="signup">
      <h1 className="title">이메일로 회원가입</h1>
      <div className="form-group">
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={onChangeEmail}
        />
        {emailError && <div className="txt-error">이메일 양식이 아닙니다.</div>}
      </div>
      <div className="form-group">
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={onChangePassword}
        />
        {passwordError && (
          <div className="txt-error">비밀번호 6자이상 입니다. </div>
        )}
      </div>
      <button className="btn-next" type="button" onClick={onSubmit}>
        다음
      </button>
    </form>
  );
}

export default SignUp;
