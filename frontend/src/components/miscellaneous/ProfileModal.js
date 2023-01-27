import { ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const ProfileModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {props.children ? (
        <span onClick={onOpen}>{props.children}</span>
      ) : (
        <IconButton
          display={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
        />
      )}
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDir={"column"}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Image
              borderRadius={"full"}
              boxSize="150px"
              src={props.user.pic}
              alt={props.user.name}
              alignSelf="center"
            />
            <Text mt="10px" fontSize="3xl" fontFamily={"work sans"}>
              Email : {props.user.email}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
