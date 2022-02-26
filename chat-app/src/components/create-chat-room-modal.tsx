import React from "react";
import styled from "styled-components";

import InputText from "./input-text";
import Button from "./button";

type CreateChatRoomModalProps = {
  onInput: (e: React.FormEvent<HTMLDivElement>) => void;
  onBlur: (e: React.FormEvent<HTMLDivElement>) => void;
  onClickButton: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isShow: boolean;
};

function CreateChatRoomModal({
  onInput,
  onBlur,
  onClickButton,
  isShow,
}: CreateChatRoomModalProps) {
  console.log("isShow", isShow);
  return (
    <CreateChatRoomModalStyle isShow={isShow}>
      <div className="modal">
        <div>
          <InputText
            placeholder="チャットルーム名"
            onInput={onInput}
            onBlur={onBlur}
          />
        </div>
        <div className="button">
          <Button name="作成" onClick={onClickButton} primary />
        </div>
      </div>
    </CreateChatRoomModalStyle>
  );
}

const CreateChatRoomModalStyle = styled.div<{ isShow: boolean }>`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.3);
  /* モーダルの表示/非表示の切り替え */
  display: ${(props) => (props.isShow ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  .modal {
    opacity: initial;
    background: rgba(255, 255, 255, 1);
    width: 500px;
    padding: 20px;
  }

  .button {
    margin-top: 10px;
    text-align: right;
  }
`;

export default CreateChatRoomModal;
