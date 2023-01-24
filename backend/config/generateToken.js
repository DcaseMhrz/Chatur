const jwt = require("jsonwebtoken");

const generateToken = (userid) => {
  const token = jwt.sign({ userid }, process.env.SECRETKEY, {
    expiresIn: "30d",
  });
  return token;
};

module.exports = generateToken;
