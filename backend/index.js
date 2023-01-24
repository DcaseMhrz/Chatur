const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const connectDB = require("./config/db");
const UserRoutes = require("./routes/UserRoutes");
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

app.get("/api/chats", (req, res) => {
  res.send(chats);
});
app.use("/api/user", UserRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`server Started at port ${PORT}`));
