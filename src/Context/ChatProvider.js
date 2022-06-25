import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  //   const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    setUser(userInfo);
    if (!userInfo) {
      // navigate("/");
    }
  }, []);

  return (
    <ChatContext.Provider value={{ user, setUser }}>
      {children}
    </ChatContext.Provider>
  );
};

const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
