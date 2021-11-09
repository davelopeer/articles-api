const controllerCaller = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    const statusCode = error.statusCode || 500;
    res.status(statusCode)
        .send()
        .end();
  }
};

module.exports = controllerCaller;