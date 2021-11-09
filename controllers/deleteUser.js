const mongoose = require("mongoose");
const User = mongoose.model("User");

const deleteUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      User.findOneAndDelete({ email }, function (err, user) {
        if (err) return res.status(500).send(err);
        if (!user) return res.status(404).send("User not found");
        return res.status(200).send("User deleted successfully");
      });
    } else {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  deleteUser,
};
