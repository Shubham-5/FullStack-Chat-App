import { AddIcon } from "@chakra-ui/icons";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { getSender } from "../../config/chatLogic";

import { Button, Skeleton } from "@chakra-ui/react";

const Chats = ({
  fetchAgain,
  selectedChat,
  setSelectedChat,
  setUser,
  user,
  chats,
  setChats,
}: {
  selectedChat: String;
  setSelectedChat: any;
  fetchAgain: Boolean;
  setUser: any;
  user: any;
  chats: any;
  setChats: any;
}) => {
  const [loggedUser, setLoggedUser] = useState("");

  const toast = useToast();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(
        "https://mern-websocket-chat-app.herokuapp.com/api/chat",
        config
      );

      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo") || "{}"));

    fetchChats();

    // eslint-disable-next-line
  }, [fetchAgain]);

  return (
    <Box
      d={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir='column'
      alignItems='center'
      p={3}
      bg='gray.50'
      w={{ base: "100%", md: "31%" }}
      borderRadius='lg'
      boxShadow='lg'
      borderWidth='1px'>
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        d='flex'
        w='100%'
        justifyContent='space-between'
        alignItems='center'>
        Chats
      </Box>
      <Box
        d='flex'
        flexDir='column'
        p={3}
        bg='#F8F8F8'
        w='100%'
        h='100%'
        boxShadow='md'
        borderRadius='lg'
        overflowY='hidden'>
        {chats ? (
          <Stack overflowY='scroll'>
            {chats.map((chat: any) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                cursor='pointer'
                bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                color={selectedChat === chat ? "white" : "black"}
                px={3}
                py={2}
                borderRadius='lg'
                key={chat._id}>
                <Text>
                  {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName}
                </Text>
              </Box>
            ))}
          </Stack>
        ) : (
          <Stack>
            <Skeleton height='45px' /> <Skeleton height='45px' />
            <Skeleton height='45px' /> <Skeleton height='45px' />
            <Skeleton height='45px' /> <Skeleton height='45px' />
            <Skeleton height='45px' /> <Skeleton height='45px' />
            <Skeleton height='45px' /> <Skeleton height='45px' />
            <Skeleton height='45px' /> <Skeleton height='45px' />
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default Chats;
