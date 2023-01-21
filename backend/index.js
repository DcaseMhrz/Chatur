const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const connectDB = require("./config/db");
const app = express();

dotenv.config();
connectDB();
PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.listen(PORT, console.log(`server Started at port ${PORT}`));
