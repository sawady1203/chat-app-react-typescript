import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Global } from "@emotion/react";

import globals from "./styles/global";
import ChatListPage from "./pages/chat-list-page";
import ChatRoomPage from "./pages/chat-room-page";

function Routes() {
  return (
    <Router>
      <Global styles={globals} />
      <Switch>
        <Route path="/" element={<ChatListPage />} />
        <Route path="/room" element={<ChatRoomPage />} />
      </Switch>
    </Router>
  );
}

export default Routes;
