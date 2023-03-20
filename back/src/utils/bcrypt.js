const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashString = async (string) => {
  const hashedString = await bcrypt.hash(string, saltRounds);
  return hashedString;
};

module.exports = {
  hashString,
};
