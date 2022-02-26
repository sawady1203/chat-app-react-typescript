import React from "react";
import styled from "styled-components";

type UserProps = {
  name: string;
};

function User({ name }: UserProps) {
  return (
    <UserStyle>
      <div>{name}</div>
    </UserStyle>
  );
}

const UserStyle = styled.div`
  color: #ffffff;
  margin: 5px 10px;
`;

export default User;
