import React from "react";
import styled from "styled-components";

const FormLavel = styled.label`
  text-align: left;
  display: block;
  margin: 0 0 10px;
  font-size: 16px;
  color: #767676;
`;

const FormInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #ddd;
  border-width: 0 0 1px;
  outline: none;
  font-size: 16px;
  margin: 0 0 16px;
  padding: 10px 0 8px;
`;

const TxtError = styled.div`
  color: red;
  margin: 10px 0 12px;
  font-size: 14px;
`;

function FormGroup(props) {
  return (
    <>
      <div className="form-group">
        <FormLavel htmlFor="email">이메일</FormLavel>
        <FormInput
          type="email"
          name="email"
          id="email"
          placeholder="이메일을 입력해주세요."
          defaultValue={props.email}
          onChange={props.onChangeEmail}
        />
        {props.emailError && <TxtError>이메일 양식이 아닙니다.</TxtError>}
      </div>
      <div className="form-group">
        <FormLavel htmlFor="password">비밀번호</FormLavel>
        <FormInput
          type="password"
          name="password"
          id="password"
          placeholder="비밀번호를 입력해주세요."
          defaultValue={props.password}
          onChange={props.onChangePassword}
        />
        {props.passwordError && <TxtError>비밀번호 6자이상 입니다. </TxtError>}
      </div>
    </>
  );
}

export default FormGroup;
