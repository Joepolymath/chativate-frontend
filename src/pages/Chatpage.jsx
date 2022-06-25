import React, { useEffect, useState } from "react";
import axios from "axios";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import Chats from "../components/Chats";
import { Box } from "@chakra-ui/layout";
import ChatBox from "../components/ChatBox";
import { useSelector } from "react-redux";

function Chatpage() {
  useEffect(() => {}, []);
  const user = useSelector((state) => state.user.user);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <Chats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
}

export default Chatpage;
