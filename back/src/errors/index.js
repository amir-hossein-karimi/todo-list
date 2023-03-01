const createError = (res, code, message) => {
  res.writeHead(code);
  res.write(
    JSON.stringify({
      message,
      success: false,
    })
  );
  return res.end();
};

module.exports = {
  createError,
};
