const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashString = (string) => {
  return bcrypt.hash(string, saltRounds, (error, hashedString) => {
    if (error) {
      return { error: true };
    } else {
      return { error: false, value: hashedString };
    }
  });
};

module.exports = {
  hashString,
};
