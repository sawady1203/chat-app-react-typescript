import React from "react";
import ChatListItem from "./chat-list-item";

export type ChatListData = {
  roomId: string;
  name: string;
  users: Array<string>;
};

type Props = {
  data: ChatListData[];
};

function ChatList({ data }: Props) {
  console.info("chat-list-data", data);
  console.log("room length", data.length);
  return (
    <div>
      {data.length > 0 &&
        data.map((room: ChatListData) => {
          return (
            <ChatListItem
              name={room.name}
              numberOfPeople={room.users.length}
              roomId={room.roomId}
              key={room.roomId}
            />
          );
        })}
    </div>
  );
}

export default ChatList;
