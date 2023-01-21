import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const setCreds = () => {
    setEmail("guest@guest.com");
    setPassword("guest123");
  };
  const submitLogin = () => {
    console.log(email);
  };

  return (
    <VStack spacing={4}>
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
      <FormControl>
        <Button
          colorScheme="blue"
          width={"100%"}
          type="submit"
          onClick={submitLogin}
        >
          Login
        </Button>
      </FormControl>
      <FormControl>
        <Button colorScheme="red" width={"100%"} onClick={setCreds}>
          Use Guest Credentials
        </Button>
      </FormControl>
    </VStack>
  );
};

export default Login;
