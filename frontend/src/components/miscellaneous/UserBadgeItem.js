import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = (props) => {
  return (
    <Box
      px={2}
      py={2}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      backgroundColor="green"
      color={"white"}
      cursor="pointer"
      onClick={props.handleFunction}
    >
      {props.user.name}
      <CloseIcon pl={2} />
    </Box>
  );
};

export default UserBadgeItem;
