import React from "react";
import styled from "styled-components";

type ButtonProps = {
  name: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  primary?: boolean;
};

function Button({ name, onClick, primary }: ButtonProps) {
  console.log("button props:", { name }, { primary });
  return (
    <ButtonStyle onClick={onClick} primary={primary}>
      {name}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.div<{ primary?: boolean }>`
  display: inline-block;
  padding: 8px 15px;
  user-select: none;
  /* 主ボタンか副ボタンかでボタンのデザインを変更 */
  background: ${(props) => (props.primary ? "#ffd700" : "#dcdcdc")};
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background: ${(props) => (props.primary ? "#ffa500" : "#d3d3d3")};
  }
`;

export default Button;
