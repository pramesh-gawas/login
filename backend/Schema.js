const mongoose = require("mongoose");

const SignUpSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  topic: {
    type: String,
    require: true,
  },
  likes: {
    type: Number,
    require: true,
  },
});

const SignUp = mongoose.model("userData", SignUpSchema);

module.exports = SignUp;
