import React from "react";
import styled from "styled-components";

import InputText from "./input-text";
import Button from "./button";

type JoinChatRoomProps = {
  onInputText: (e: React.FormEvent<HTMLDivElement>) => void;
  onBlurText: (e: React.FormEvent<HTMLDivElement>) => void;
  onClickButton: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

function JoinChatRoom({
  onInputText,
  onBlurText,
  onClickButton,
}: JoinChatRoomProps) {
  return (
    <JoinChatRoomStyle>
      <div className="input">
        <InputText
          placeholder="ユーザー名"
          onInput={onInputText}
          onBlur={onBlurText}
        />
      </div>
      <div className="button">
        <Button name="入室" onClick={onClickButton} />
      </div>
    </JoinChatRoomStyle>
  );
}

const JoinChatRoomStyle = styled.div`
  display: grid;
  grid-template-rows: 80px;
  grid-template-columns: 1fr 80px;
  align-items: center;

  .input {
    padding: 10px;
  }
`;

export default JoinChatRoom;
