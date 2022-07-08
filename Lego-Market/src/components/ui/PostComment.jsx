import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import InputFooter from "./InputFooter";

const CommentList = styled.ul`
  display: flex;
  padding: 20px 16px;
`;

const CommentItem = styled.li`
  font-size: 14px;
`;

const CommentUserWap = styled.div`
  display: flex;
`;

const CommentUserImg = styled.img`
  border: 0.5px solid #dbdbdb;
  border-radius: 50%;
  width: 36px;
  height: 36px;
`;
const UserIdLink = styled(Link)`
  margin: 13px 10px;
  font-size: 16px;
`;

const CommentDate = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #767676;
`;
const CommentBtnMore = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;

const CommentTxt = styled.p`
  margin-left: 50px;
`;

function PostComment() {
  return (
    <>
      <CommentList>
        <CommentItem>
          <CommentUserWap>
            <Link to="#none">
              <CommentUserImg
                src={process.env.PUBLIC_URL + "/images/Ellipse1.png"}
              />
            </Link>
            <UserIdLink to="#none">user name</UserIdLink>
            <CommentDate>15분전</CommentDate>
            <CommentBtnMore>
              <img
                src={process.env.PUBLIC_URL + "/icons/icon- more-vertical.png"}
              />
            </CommentBtnMore>
          </CommentUserWap>
          <CommentTxt>djssd</CommentTxt>
        </CommentItem>
      </CommentList>
      <InputFooter
        img="/images/btn_gallery.png"
        placeholder="댓글 입력하기"
        btnTxt="게시"
      />
    </>
  );
}

export default PostComment;
