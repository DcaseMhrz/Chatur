import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, IconButton, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { getSender, getSenderFull } from "../config/ChatLogics";
import ChatContext from "../Context/ChatContext";
import ProfileModal from "./miscellaneous/ProfileModal";
import UpdateGroupChatModal from "./miscellaneous/UpdateGroupChatModal";

const SingleChat = (props) => {
  const context = useContext(ChatContext);
  const { user, selectedChat, setSelectedChat } = context;

  return (
    <>
      {selectedChat ? (
        <>
          <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily={"work sans"}
            display="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            <IconButton
              display={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat("")}
            />
            {!selectedChat.isGroupChat ? (
              <>
                {getSender(user, selectedChat.users)}
                <ProfileModal user={getSenderFull(user, selectedChat.users)} />
              </>
            ) : (
              <>
                {selectedChat.chatName.toUpperCase()}
                <UpdateGroupChatModal
                  fetchAgain={props.fetchAgain}
                  setFetchAgain={props.setFetchAgain}
                />
              </>
            )}
          </Text>
          <Box
            display={"flex"}
            flexDir="column"
            justifyContent={"flex-end"}
            p={3}
            bg="#E8E8E8"
            w="100%"
            h="100%"
            borderRadius={"lg"}
            overflowY="hidden"
          >
            {/* Messages here */}
          </Box>
        </>
      ) : (
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          height="100%"
        >
          <Text fontSize={"3xl"} pb="3" fontFamily={"work sans"}>
            Select Chat
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
