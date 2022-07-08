import React from "react";
import styled from "styled-components";
import InputFooter from "../../components/ui/InputFooter";

const ChatRoomUl = styled.ul`
  box-sizing: border-box;
  margin: 10px 28px;
`;

const ChatSenderLi = styled.li`
  display: flex;
  align-items: flex-end;
  padding: 10px;
`;

const ChatSenderTxt = styled.p`
  border-radius: 0 5px 5px 5px;
  border: 1px solid #c4c4c4;
  background-color: white;
  padding: 7px;
  margin-left: 12px;
`;

const ChatMeLi = styled.li`
  display: flex;
  align-items: flex-end;
  flex-direction: row-reverse;
  padding: 10px;
`;

const ChatMeLiTxt = styled.p`
  border-radius: 0 5px 5px 5px;
  border: 1px solid #ffc776;
  background-color: #ffc776;
  padding: 7px;
`;

const ChatRoomTime = styled.p`
  color: #767676;
  font-size: 12px;
  padding: 6px;
`;

function Chatroom() {
  return (
    <>
      <ChatRoomUl>
        <ChatSenderLi>
          <img src={process.env.PUBLIC_URL + "/images/Ellipse1.png"} />
          <ChatSenderTxt>안녕하세요!!</ChatSenderTxt>
          <ChatRoomTime>12:00</ChatRoomTime>
        </ChatSenderLi>

        <ChatMeLi>
          <ChatMeLiTxt>안녕하세요 </ChatMeLiTxt>
          <ChatRoomTime>12:00</ChatRoomTime>
        </ChatMeLi>
      </ChatRoomUl>

      <InputFooter
        img="/images/btn_gallery.png"
        placeholder="채팅하기"
        btnTxt="전송"
      />
    </>
  );
}

export default Chatroom;
