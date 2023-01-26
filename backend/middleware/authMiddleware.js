const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRETKEY);
      req.user = await User.findById(decoded.userid).select("-password");
      next();
    } catch (error) {
      res.status(404);
      res.send(error.message);
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, no Token");
  }
});

module.exports = { protect };
