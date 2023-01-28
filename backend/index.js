const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const connectDB = require("./config/db");
const UserRoutes = require("./routes/UserRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();
connectDB();
PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/chat", chatRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/messages", messageRoutes);

//-------------------Deployment----------------

//-------------------Deployment----------------
app.use(notFound);
app.use(errorHandler);

const server = app.listen(PORT, console.log(`server Started at port ${PORT}`));

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
  },
});
io.on("connection", (socket) => {
  console.log("connected to socket.io");
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    console.log(userData._id);
    socket.emit("connected");
  });
  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("user joined room" + room);
  });

  socket.on("typing", (room) => {
    socket.in(room).emit("typing");
    console.log("typing");
  });
  socket.on("stop typing", (room) => {
    socket.in(room).emit("stop typing");
    console.log("stop typing");
  });

  socket.on("new message", (newMessageReceived) => {
    var chat = newMessageReceived.chat;
    if (!chat.users) return console.log("chat.user not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageReceived.sender._id) return;
      socket.in(user._id).emit("message received", newMessageReceived);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});
