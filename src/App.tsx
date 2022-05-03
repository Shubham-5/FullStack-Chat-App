import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

function App() {
  const [user, setUser] = useState<any>();
  const [selectedChat, setSelectedChat] = useState<any>();
  const [chats, setChats] = useState<any>();
  const history = useNavigate();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setUser(userInfo);

    if (!userInfo) history("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/chat'
          element={
            <Chat
              user={user}
              setUser={setUser}
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
              chats={chats}
              setChats={setChats}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
