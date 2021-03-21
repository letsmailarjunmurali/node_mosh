function logger(req, res, next) {
  console.log("Logging");
  next(); // calling next middleware
}

module.exports = logger;
