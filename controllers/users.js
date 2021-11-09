const mongoose = require("mongoose");
const User = mongoose.model("User");

const users = async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await User.find({});
    if (users) {
      return res.status(200).json({ ...users });
    }

    res.status(400).json({ msg: "Users not found" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  users,
};
