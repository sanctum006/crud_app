const mongoose = require("mongoose");
const User = mongoose.model("User");

const update = async (req, res) => {
  const { email, password, newPassword, newName, newMobile } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      User.findOneAndUpdate(
        { email },
        {
          $set: {
            name: newName,
            mobile: newMobile,
            email: email,
            password: newPassword,
          },
        },
        { new: true },
        (err, doc) => {
          if (err) {
            return res.status(400).json({ msg: "Something went wrong..." });
          } else {
            return res.status(200).json({ msg: "Successfully Updated." });
          }
        }
      );
    } else {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  update,
};
