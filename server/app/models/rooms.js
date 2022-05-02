const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roomsSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   buildingId: {
      type: mongoose.Types.ObjectId,
      ref: "Buildings",
      required: true,
   },
});

const Rooms = mongoose.model("rooms", roomsSchema);

module.exports = Rooms;
