const mongoose = require("mongoose");
const User = mongoose.model("User");

const register = async (req, res) => {
  const { name, email, password, mobile } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const newUser = new User({ email, password, name, mobile });
    await newUser.save();

    res.status(201).json({ msg: "User created" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = register;
