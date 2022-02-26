import React, { useState } from "react";
import styled from "styled-components";

import UserList, { UserItem } from "../components/user-list";
import Button from "../components/button";
import MessageList, { MessageItem } from "../components/message-list";
import JoinChatRoom from "../components/join-chat-room";
import CreateMesage from "../components/create-message";

type ChatRoomPageProps = {
  users: UserItem[];
  messages: MessageItem[];
};

// function ChatRoomPage({ users, messages }: ChatRoomPageProps) {
function ChatRoomPage() {
  const users: UserItem[] = [
    { name: "user_1", socketId: "xxx1" },
    { name: "user_2", socketId: "xxx2" },
    { name: "user_3", socketId: "xxx3" },
  ];

  const messages: MessageItem[] = [
    {
      logId: 1,
      userName: "ユーザー_1",
      time: "2022/02/06 18:37",
      message: "これはテストメッセージ_1",
    },
    {
      logId: 2,
      userName: "ユーザー_2",
      time: "2022/02/06 18:37",
      message: "これはテストメッセージ_2",
    },
    {
      logId: 3,
      userName: "ユーザー_3",
      time: "2022/02/06 18:37",
      message: "これはテストメッセージ_3s",
    },
  ];

  const [isJoin, setIsJoin] = useState(false);

  return (
    <ChatRoomPageStyle isJoin={isJoin}>
      <UserList users={[{ name: "sawada", socketId: "test" }]} />
      <div className="menu">
        <div className="chatRoomName">チャットルーム名</div>
        <div className="userList">
          <UserList users={users} />
        </div>
        <div className="button">
          <Button name="戻る" onClick={() => {}} />
        </div>
      </div>
      <div className="message">
        <MessageList messages={messages} />
      </div>
      <div className="createMessage">
        <div className="notJoin">
          <JoinChatRoom
            onInputText={() => {}}
            onBlurText={() => {}}
            onClickButton={() => {}}
          />
        </div>
        <div className="join">
          <CreateMesage
            onInputText={() => {}}
            onBlurText={() => {}}
            onClickButton={() => {}}
          />
        </div>
      </div>
    </ChatRoomPageStyle>
  );
}

const ChatRoomPageStyle = styled.div<{ isJoin: boolean }>`
  display: grid;
  grid-template-rows: 1fr 80px;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
  box-sizing: border-box;
  .menu {
    background: #27224d;
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    display: grid;
    grid-template-rows: 80px 1fr 80px;
    grid-template-columns: 250px;
    .chatRoomName {
      font-size: 20px;
      color: #ffffff;
      font-weight: bold;
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      padding: 10px;
    }
    .userList {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
      padding: 10px;
    }
    .button {
      grid-row: 3 / 4;
      grid-column: 1 / 2;
      text-align: center;
    }
  }
  > .message {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    position: relative;
    padding: 10px;
  }
  .createMessage {
    border-top: 1px solid #d3d3d3;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    .notJoin {
      display: ${(props) => (!props.isJoin ? "block" : "none")};
    }
    .join {
      display: ${(props) => (props.isJoin ? "block" : "none")};
    }
  }
`;

export default ChatRoomPage;
