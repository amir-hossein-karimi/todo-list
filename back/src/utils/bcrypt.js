const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashString = async (string) => {
  const hashedString = await bcrypt.hash(string, saltRounds);
  return hashedString;
};

const compareStringWithHash = async (string, hash) => {
  const isEqual = await bcrypt.compare(string, hash);
  return isEqual;
};

module.exports = {
  hashString,
  compareStringWithHash,
};
