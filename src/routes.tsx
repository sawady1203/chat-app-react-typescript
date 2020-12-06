import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ChatListPage from "./pages/chat-list-page";
import ChatRoomPage from "./pages/chat-room-page";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ChatListPage} />
      <Route exact paht="/room" component={ChatRoomPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
