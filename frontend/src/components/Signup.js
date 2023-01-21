import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [show, setShow] = useState(false);

  const submitSignup = () => {
    console.log(email);
  };
  const postDetails = (pics) => {};
  return (
    <VStack spacing={4}>
      <FormControl id="name" isRequired>
        <FormLabel>Full Name</FormLabel>
        <Input
          value={email}
          type="text"
          placeholder="Enter full name"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input
          value={email}
          type="email"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </FormControl>
      <FormControl id="password " isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            value={password}
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <InputRightElement width={"4.5rem"}>
            <Button
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? "Show" : "Hide"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="password " isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            value={password}
            type={show ? "text" : "password"}
            placeholder="Confirm your password"
            onChange={(e) => {
              setCpassword(e.target.value);
            }}
          />
          <InputRightElement width={"4.5rem"}>
            <Button
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? "Show" : "Hide"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Upload Profile Picture</FormLabel>
        <Input
          type={"file"}
          p={1.5}
          accept={"image/*"}
          onChange={(e) => {
            postDetails(e.target.files[0]);
          }}
        />
      </FormControl>
      <FormControl>
        <Button
          colorScheme="blue"
          width={"100%"}
          type="submit"
          onClick={submitSignup}
        >
          Sign Up
        </Button>
      </FormControl>
    </VStack>
  );
};

export default Signup;
