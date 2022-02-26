import React from "react";
import styled from "styled-components";

import Message, { MessageProps } from "./message";

export type MessageItem = MessageProps & {
  logId: number;
};

type MessageListProps = {
  messages: MessageItem[];
};

function MessageList(props: MessageListProps) {
  return (
    <MessageListStyle>
      {props.messages &&
        props.messages.map(
          ({ userName, time, message, logId }: MessageItem) => {
            return (
              <Message
                userName={userName}
                time={time}
                message={message}
                key={logId}
              />
            );
          }
        )}
    </MessageListStyle>
  );
}

const MessageListStyle = styled.div`
  position: absolute;
  bottom: 0;
`;

export default MessageList;
