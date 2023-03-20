const { sign, verify } = require("jsonwebtoken");
const { SECRET } = require("../constants");

const createToken = async (payload, isRefreshToken = false) => {
  const token = await sign(payload, SECRET, {
    expiresIn: isRefreshToken ? "7d" : "1d",
  });
  return token;
};

const decodeToken = async (token) => {
  const decoded = await verify(token, SECRET);
  return decoded;
};

module.exports = {
  createToken,
  decodeToken,
};
