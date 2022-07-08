import React from "react";
import styled from "styled-components";
// 각 경로마다 아이콘이 달라져야함
// 시작 시 경로를 확인해서 이미지를 바꾸는 식으로 구현 하면 좋을듯
// import homeIcon from "../assets/icon/icon-home.svg"
// import homeIconFill from "../assets/icon/icon-home-fill.svg"
// import chatIcon from "../assets/icon/icon-message-circle.svg"
// import chatIconFill from "../assets/icon/icon-message-circle-fill.png"
// import editIconFill from "../assets/icon/icon-edit.png"
// import editIcon from "../assets/icon/icon-edit.svg"
// import profileIcon from "../assets/icon/icon-user.svg"
import { NavLink } from "react-router-dom";

const AppFooterWrap = styled.ul`
  border-top: 1px solid #767676;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6px;

  li {
    flex: 1;
    width: 84px;
    height: 59px;
    padding: 11.5px 0 6px;
  }
  li div {
    width: 24px;
    height: 24px;
    margin: 0 auto;
    display: block;
  }

  li strong {
    display: block;
    text-align: center;
    font-size: 10px;
    line-height: 14px;
    margin-top: 4px;
    color: #767676;
  }
`;
function AppFooter() {
  return (
    <AppFooterWrap className="list-footer-nav">
      <li>
        <strong>홈</strong>
      </li>
      <li>
        <div></div>
        <strong>채팅</strong>
      </li>
      <li>
        <strong>게시물 작성</strong>
      </li>
      <li>
        <strong>프로필</strong>
      </li>
    </AppFooterWrap>
  );
}

export default AppFooter;
