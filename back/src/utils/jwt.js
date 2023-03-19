const { sign, decode } = require("jsonwebtoken");
const { SECRET } = require("../constants");

const createToken = async (payload) => {
  const token = await sign(payload, SECRET, { expiresIn: "7d" });
  return token;
};

const decodeToken = async (token) => {
  const decoded = await decode(token);
  return decoded;
};

module.exports = {
  createToken,
  decodeToken,
};
