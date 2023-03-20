const createError = (res, code, message) => {
  res.writeHead(code);
  res.write(
    JSON.stringify({
      success: false,
      statusCode: code,
      data: { message },
    })
  );
  return res.end();
};

module.exports = {
  createError,
};
