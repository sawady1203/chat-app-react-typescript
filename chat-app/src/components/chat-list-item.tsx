import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Button from "./button";

type ChatListItemProps = {
  name: string;
  numberOfPeople: number;
  roomId: string;
};

function ChatListItem({
  name,
  numberOfPeople,
  roomId,
}: //   history,
ChatListItemProps) {
  // 入室ボタンクリック時
  let navigate = useNavigate();
  const handlePage = () => {
    console.log("cliecked");
    navigate(`/room?roomId=` + roomId);
  };

  return (
    <ChatListItemStyle>
      <div className="chatRoomName">{name}</div>
      <div className="numberOfPeople">{numberOfPeople}</div>
      <div className="button">
        <Button name="入室" onClick={() => handlePage()} primary />
      </div>
    </ChatListItemStyle>
  );
}

const ChatListItemStyle = styled.div`
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid #d3d3d3;
  padding-top: 10px;
  padding-bottom: 10px;
  &:hover {
    background: #f5f5f5;
  }
  .chatRoomName {
    width: calc(100% - 200px);
    padding-left: 10px;
  }
  .numberOfPeople {
    width: 100px;
    text-align: right;
  }
  .button {
    width: 100px;
    text-align: right;
  }
`;

export default ChatListItem;
