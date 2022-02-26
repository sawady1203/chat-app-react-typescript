import React from "react";
import styled from "styled-components";

import InputText from "./input-text";
import Button from "./button";

type CreateMessageProps = {
  onInputText: (event: React.FormEvent<HTMLDivElement>) => void;
  onBlurText: (event: React.FormEvent<HTMLDivElement>) => void;
  onClickButton: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

function CreateMesage({
  onInputText,
  onBlurText,
  onClickButton,
}: CreateMessageProps) {
  return (
    <CreateMessageStyle>
      <div className="input">
        <InputText
          placeholder="メッセージ"
          onInput={onInputText}
          onBlur={onBlurText}
        />
      </div>
      <div className="button">
        <Button name="投稿" onClick={onClickButton} primary />
      </div>
    </CreateMessageStyle>
  );
}

const CreateMessageStyle = styled.div`
  display: grid;
  grid-auto-rows: 80px;
  grid-template-columns: 1fr 80px;
  align-items: center;

  .input {
    padding: 10px;
  }
`;

export default CreateMesage;
