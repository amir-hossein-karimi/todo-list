const createError = (res, code, message) => {
  res.statusCode(code);
  res.write(message);
  res.end();
};

module.exports = {
  createError,
};
