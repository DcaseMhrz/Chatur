import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import Chats from "./Pages/Chats";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/chats" element={<Chats />} />
      </Routes>
    </div>
  );
};

export default App;
