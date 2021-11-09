module.exports = (req, res, next) => {
  // TODO: Validation if user has admin role
  req.isAdmin = true;
  next();
}