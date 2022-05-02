const mongoose = require("mongoose");
const isEmail = require("validator/lib/isEmail");

const Schema = mongoose.Schema;

const userSchema = new Schema({
   username: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 64,
      unique: true, //user name to be unique so that users cannot have same name
   },
   email: {
      type: String,
      required: true,
      unique: true, //user email to be unique so that users cannot have same email
      validate: {
         validator: function (value) {
            return isEmail(value); //returns true or false
         },
         message: function () {
            return "invalid email format";
         },
      },
   },
   password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 128,
   },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
