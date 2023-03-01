const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashString = async (string) => {
  try {
    const hashedString = await bcrypt.hash(string, saltRounds);
    return { error: false, value: hashedString };
  } catch (e) {
    return { error: true, value: undefined };
  }
};

module.exports = {
  hashString,
};
