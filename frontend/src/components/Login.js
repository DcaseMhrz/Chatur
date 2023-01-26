import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const toast = useToast();
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const setCreds = () => {
    setEmail("guest@guest.com");
    setPassword("guest123");
  };
  const submitLogin = async () => {
    if (!email || !password) {
      toast({
        title: "Please Fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      setloading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      setloading(false);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/chats");
    } catch (error) {
      toast({
        title: "Login Failed",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setloading(false);
    }
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
          isLoading={loading}
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
