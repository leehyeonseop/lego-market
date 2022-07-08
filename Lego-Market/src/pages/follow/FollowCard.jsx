import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const FollowList = styled.ul`
  margin: 20px 20px;
`;
const FollowItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 100%; ;
`;

const BtnFollow = styled.button`
  width: 56px;
  height: 28px;
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "#fff" ? "#767676" : "#fff")};
  border: 1px solid #dbdbdb;
  font-size: 12px;
  border-radius: 26px;
  cursor: pointer;
`;

const UserImg = styled.img`
  border: 0.5px solid #dbdbdb;
  border-radius: 50px;
`;

const UserIdWap = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const UserTxt = styled.p`
  margin: 10px;
  color: ${(props) => props.color};
`;

function FollowCard() {
  let [follow, isFollow] = useState(false);

  function following() {
    isFollow(true);
  }

  function unfollow() {
    isFollow(false);
  }

  return (
    <>
      <FollowList>
        <FollowItem>
          <Link to="#">
            <UserImg src={process.env.PUBLIC_URL + "/images/Ellipse1.png"} />
            <UserIdWap>
              <UserTxt color="#000">안녕</UserTxt>
              <UserTxt color="#767676">안녕</UserTxt>
            </UserIdWap>
          </Link>
          {follow ? (
            <BtnFollow bg="#fff" onClick={unfollow}>
              취소
            </BtnFollow>
          ) : (
            <BtnFollow bg="#EA4335" onClick={following}>
              팔로우
            </BtnFollow>
          )}
        </FollowItem>
      </FollowList>
    </>
  );
}

export default FollowCard;
