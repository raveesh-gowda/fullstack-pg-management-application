const mongoose = require("mongoose")

const Schema = mongoose.Schema

const buildingsSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   address: {
      type: String,
      required: true,
   },
   landmark: {
      type: String,
   },
   userId: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
      required: true,
   },
});

const Buildings = mongoose.model("buildings", buildingsSchema)

module.exports = Buildings