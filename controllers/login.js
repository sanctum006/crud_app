const mongoose = require("mongoose");
const User = mongoose.model("User");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      return res.status(200).json({ msg: "Successfully Logged In." });
    }

    res.status(400).json({ msg: "User doesn't exists" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = login;
