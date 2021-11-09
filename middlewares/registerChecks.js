const { emailValidate, passwordValidate } = require("../utils/validate");

const regiterInitialChecks = (req, res, next) => {
  const { email, password } = req.body;
  if (emailValidate(email) && passwordValidate(password)) {
    next();
  } else {
    res.status(400).send("Initial checks failed...");
  }
};

module.exports = regiterInitialChecks;
