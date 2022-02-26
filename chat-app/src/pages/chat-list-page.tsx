import React, { useState } from "react";
import styled from "styled-components";
import ChatList, { ChatListData } from "../components/chat-list";
import Button from "../components/button";
import CreateChatRoomModal from "../components/create-chat-room-modal";

const _data: ChatListData[] = [
  { roomId: "ROOM_1", name: "chat room 1", users: [] },
  { roomId: "ROOM_2", name: "chat room 2", users: ["sawada"] },
  { roomId: "ROOM_3", name: "chat room 3", users: ["masayoshi", "test"] },
  {
    roomId: "ROOM_4",
    name: "chat room 4",
    users: ["test1", "test2", "test3"],
  },
];

type ChatListPageProps = {};

function ChatListPage(props: ChatListPageProps) {
  const [isCreateChatRoomModalShow, setIsCreateChatRoomModalShow] =
    useState(false);

  const displayCreateroomModal = () => {
    setIsCreateChatRoomModalShow(true);
    console.log("display create room modal");
    console.log(isCreateChatRoomModalShow);
  };

  // チャットルームの作成処理

  const createChatRoom = () => {
    setIsCreateChatRoomModalShow(false);
    console.log("chat room created");
    console.log(isCreateChatRoomModalShow);
  };

  return (
    <ChatListPageStyle>
      <div className="title">
        <div className="chatRoomList">チャットルーム一覧</div>
        <div>
          <Button
            name="チャットルームを作成"
            onClick={(e: React.FormEvent<HTMLDivElement>) =>
              displayCreateroomModal()
            }
            primary={true}
          />
        </div>
      </div>
      {console.log(_data)}
      <ChatList data={_data} />

      <CreateChatRoomModal
        onInput={() => {}}
        onBlur={() => {}}
        onClickButton={() => createChatRoom()}
        isShow={isCreateChatRoomModalShow}
      />
    </ChatListPageStyle>
  );
}

const ChatListPageStyle = styled.div`
  padding: 20px;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .chatRoomList {
    font-weight: bold;
    font-size: 20px;
  }
`;

export default ChatListPage;
