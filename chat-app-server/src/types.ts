import { StringMappingType } from "typescript";
import { User, Log, Room } from "./rooms";

type ResultCommon = {
  type: string;
};

// チャットルーム作成
export type CreateRoom = {
  roomName: string;
  usreName: string;
};

// チャットルーム作成（結果）
export type CreateRoomResult = ResultCommon & {
  rooms: Room[];
};

// チャットルームに参加
export type JoinRoom = {
  roomId: string;
  userName: string;
};

// チャットルームに参加（結果）
export type JoinRoomResult = ResultCommon & {
  roomId: string;
  userName: string;
  users: User[];
};

// チャット
export type Conversation = {
  roomId: string;
  userName: string;
  message: string;
};

// チャット（結果）
export type ConversationResult = ResultCommon & {
  roomId: string;
  userName: string;
  time: string;
  message: string;
};

// チャットルーム退室（結果）
export type DisconnectRoomResult = ResultCommon & {
  roomId: string;
  socketId: string;
};

// 現在のチャットルーム
export type CurrentRoom = {
  roomId: string;
};

// 現在のチャットルーム（結果）
export type CurrentRoomResult = {
  roomId: string;
  roomName: string;
  users: User[];
  logs: Log[];
};
