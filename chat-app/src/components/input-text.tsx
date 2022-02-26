import React from "react";
import styled from "styled-components";

type InputTextProps = {
  onInput: (e: React.FormEvent<HTMLDivElement>) => void;
  onBlur: (e: React.FormEvent<HTMLDivElement>) => void;
  placeholder: string;
};

function InputText({ onInput, onBlur, placeholder }: InputTextProps) {
  return (
    <InputTextStyle>
      <div
        contentEditable={true}
        onInput={onInput}
        onBlur={onBlur}
        className="text"
        data-placeholder={placeholder}
      ></div>
    </InputTextStyle>
  );
}

const InputTextStyle = styled.div`
  .text {
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    padding: 10px;
  }
  [data-placeholder]:empty:before {
    content: attr(data-placeholder);
    color: #888;
  }
`;

export default InputText;
