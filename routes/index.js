const express = require("express");
const router = express.Router();
const registerChecks = require("./../middlewares/registerChecks");
const register = require("./../controllers/register");
const login = require("../controllers/login");
const { users } = require("../controllers/users");
const { update } = require("../controllers/update");
const { deleteUser } = require("../controllers/deleteUser");

router.get("/", function (req, res, next) {
  res.send("Hello!!");
});

router.post("/login", login);
router.post("/update", update);
router.post("/delete", deleteUser);
router.post("/register", registerChecks, register);
router.get("/users", users);

module.exports = router;
