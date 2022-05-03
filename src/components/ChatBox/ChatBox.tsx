import { Box } from "@chakra-ui/react";
import SingleChat from "../SingleChat";

const ChatBox = ({
  fetchAgain,
  setFetchAgain,
  selectedChat,
  setSelectedChat,
  setUser,
  user,
  chats,
  setChats,
}: {
  fetchAgain: Boolean;
  setFetchAgain: any;
  selectedChat: any;
  setSelectedChat: any;
  setUser: any;
  user: any;
  chats: any;
  setChats: any;
}) => {
  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems='center'
      flexDir='column'
      p={3}
      bg='gray.50'
      w={{ base: "100%", md: "68%" }}
      borderRadius='lg'
      borderWidth='1px'>
      <SingleChat
        fetchAgain={fetchAgain}
        setFetchAgain={setFetchAgain}
        user={user}
        setUser={setUser}
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
        chats={chats}
        setChats={setChats}
      />
    </Box>
  );
};

export default ChatBox;
