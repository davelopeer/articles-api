module.exports = (req, res, next) => {
  // TODO: Validation if user is authenticated role

  req.isAuthenticated = true;
  next();
}