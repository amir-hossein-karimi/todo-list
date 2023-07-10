const { sign, verify } = require("jsonwebtoken");
const { SECRET, expt } = require("../constants");

const createToken = async (payload, isRefreshToken = false) => {
  const token = await sign(payload, SECRET, {
    expiresIn: isRefreshToken ? expt.REFRESH_TOKEN : expt.ACCESS_TOKEN,
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
