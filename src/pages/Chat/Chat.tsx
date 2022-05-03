import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/layout";
import SideDrawer from "../../components/SideDrawer";
import ChatBox from "../../components/ChatBox";
import Chats from "../../components/Chats";

const Chat = ({
  user,
  setUser,
  selectedChat,
  setSelectedChat,
  chats,
  setChats,
}: {
  user: any;
  selectedChat: any;
  setSelectedChat: any;
  setUser: any;
  chats: any;
  setChats: any;
}) => {
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && (
        <SideDrawer
          user={user}
          setSelectedChat={setSelectedChat}
          chats={chats}
          setChats={setChats}
        />
      )}
      <Box d='flex' justifyContent='space-between' w='100%' h='91.5vh' p='10px'>
        {user && (
          <Chats
            fetchAgain={fetchAgain}
            user={user}
            setUser={setUser}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
            chats={chats}
            setChats={setChats}
          />
        )}
        {user && (
          <ChatBox
            user={user}
            setUser={setUser}
            fetchAgain={fetchAgain}
            setFetchAgain={setFetchAgain}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
            chats={chats}
            setChats={setChats}
          />
        )}
      </Box>
    </div>
  );
};

export default Chat;
