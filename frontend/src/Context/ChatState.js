import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatContext from "./ChatContext";

const ChatProvider = (props) => {
  const HOST = "https://mdikesh.com.np/chaturapi";
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);
  const [notification, setNotification] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        selectedChat,
        setSelectedChat,
        chats,
        setChats,
        notification,
        setNotification,
        HOST,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
