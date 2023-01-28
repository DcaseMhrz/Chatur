import React, { useContext, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ChatContext from "../Context/ChatContext";

const Signup = () => {
  const context = useContext(ChatContext);
  const { HOST } = context;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setloading] = useState(false);
  const [pic, setPic] = useState();
  const toast = useToast();
  const navigate = useNavigate();

  const submitSignup = async () => {
    setloading(true);
    if (!name || !email || !password || !cpassword) {
      toast({
        title: "Please Fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      setloading(false);
      return;
    }
    if (password !== cpassword) {
      toast({
        title: "Passwords donot match",
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
        `${HOST}/api/user/register`,
        {
          name,
          email,
          password,
          pic,
        },
        config
      );
      setloading(false);
      navigate("/chats");
    } catch (error) {
      toast({
        title: "Sign Up Failed",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setloading(false);
    }
  };
  const postDetails = (pics) => {
    setloading(true);
    if (pics === undefined) {
      toast({
        title: "Please select an image.",
        description: "No Image selected",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      setloading(false);
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chatur");
      fetch("https://api.cloudinary.com/v1_1/dbbocsxba/upload", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          setPic(data.url.toString());
          setloading(false);
        })
        .catch((err) => {
          setloading(false);
        });
    } else {
      toast({
        title: "Please select an image.",
        description: "No Image selected",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      setloading(false);
    }
  };
  return (
    <VStack spacing={4}>
      <FormControl id="name" isRequired>
        <FormLabel>Full Name</FormLabel>
        <Input
          value={name}
          type="text"
          placeholder="Enter full name"
          onChange={(e) => {
            setName(e.target.value);
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
      <FormControl id="cpassword " isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            value={cpassword}
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
          isLoading={loading}
        >
          Sign Up
        </Button>
      </FormControl>
    </VStack>
  );
};

export default Signup;
