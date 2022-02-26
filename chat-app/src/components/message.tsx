import React from "react";
import styled from "styled-components";

export type MessageProps = {
  userName: string;
  time: string;
  message: string;
};

function Message({ userName, time, message }: MessageProps) {
  return (
    <MessageStyle>
      <div className="user">
        <div className="name">{userName}</div>
        <div className="time">{time}</div>
      </div>
      <div className="message">{message}</div>
    </MessageStyle>
  );
}

const MessageStyle = styled.div`
  margin: 30px 0px;

  .user {
    display: flex;
    align-items: center;
  }

  .name {
    font-weight: bold;
  }

  .time {
    font-size: 14px;
    margin-left: 10px;
    color: #4d4d4d;
  }
`;

export default Message;
