import React from "react";
import styled from "styled-components";

interface ButtonProps {
  // ボタン名
  name: string;
  // ボタンをクリックしたときのイベント
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  // 主ボタンか副ボタンかのフラグ
  primary?: boolean;
}

class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <ButtonStyle onClick={this.props.onClick} primary={this.props.primary}>
        {this.props.name}
      </ButtonStyle>
    );
  }
}

const ButtonStyle = styled.div<{ primary?: boolean }>`
  display: inline-block;
  padding: 8px 15px;
  user-select: none;
  border-radius: 5px;
  /* 主ボタンか副ボタンかでボタンのデザインを変更 */
  background: ${(props) => (props.primary ? "#ffd700" : "#dcdcdc")};
  &:hover {
    cursor: ponter;
    background: ${(props) => (props.primary ? "#ffa500" : "#d3d3d3")};
  }
`;

export default Button;
