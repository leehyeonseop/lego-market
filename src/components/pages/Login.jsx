import React from "react";
import styled from "styled-components";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const InputDiv = styled.div`
  display: block;
  font-size: 12px;
  color: #767676;
  width: 322px;
  margin: 10px auto 6px;
  text-align: left;
`;

const LoginMain = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 30px;
`;
const SignUP = styled.a`
  display: block;
  color: #767676;
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
  text-decoration: none;
`;
const H1 = styled.h1`
  text-align: center;
`;

async function login() {
  console.log("login call");
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#pw").value;
  console.log(email,password);
  try {
    const url = "https://mandarin.api.weniv.co.kr";
    const reqPath = "/user/login";
    const loginData = {
      user: {
        email: email,
        password: password,
      },
    };
    const res = await fetch(url + reqPath, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const json = await res.json();
    console.log(json, "제이손입니다");
  } catch (err) {
    console.log(err);
  }
}

const handleSubmit = (e) => {
  const email = document.querySelector("#email").value;
  const pw = document.querySelector("#pw").value;
  console.log(email,pw);
  e.preventDefault();
};

const Login = () => {
  return (
    <LoginMain>
      <section class="login-email-container">
        {/* <h2 class="ir">이메일, 비밀번호 입력</h2> */}
        <form onSubmit={handleSubmit}>
          <H1 class="main-title login-email-title">로그인</H1>
          <InputDiv>
            <Input
              name="email"
              label="이메일"
              marginBottom={16}
              type="email"
              id="email"
            />
          </InputDiv>
          <InputDiv>
            <Input
              name="password"
              label="비밀번호"
              marginBottom={16}
              type="password"
              id="pw"
            />
          </InputDiv>
          <Link to="/home">
            <Button type="submit" onClick={login} content="로그인" />
          </Link>
          <SignUP href="#">이메일로 회원가입</SignUP>
        </form>
      </section>
    </LoginMain>
  );
};

export default Login;
