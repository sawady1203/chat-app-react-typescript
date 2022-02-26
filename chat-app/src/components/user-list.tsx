import React from "react";

import User from "./user";

export type UserItem = {
  name: string;
  socketId: string;
};

type UserListProps = {
  users: UserItem[];
};

function UserList(props: UserListProps) {
  console.log(props);
  return (
    <div>
      {props.users &&
        props.users.map((item: UserItem) => {
          return <User key={item.socketId} name={item.name} />;
        })}
    </div>
  );
}

export default UserList;
