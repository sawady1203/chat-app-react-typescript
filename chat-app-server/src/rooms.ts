export type User = {
  name: string;
  socketId: number;
};

export type Log = {
  logId: number;
  userName: string;
  time: string;
  message: string;
};

export type Room = {
  id: string;
  name: string;
  users: User[];
  logs: Log[];
};

const rooms: Room[] = [
  { id: "DEFAULT_ROOM", name: "雑談", users: [], logs: [] },
];

export default rooms;
