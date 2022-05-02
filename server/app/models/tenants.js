const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tenantSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
   },
   mobile: {
      type: String,
      required: true,
   },
   aadhar: {
      type: String,
      required: true,
   },
   roomId: {
      type: mongoose.Types.ObjectId,
      ref: "Rooms",
      required: true,
   },
   buildingId: {
      type: mongoose.Types.ObjectId,
      ref: "Buildings",
      required: true,
   },
});

const Tenant = mongoose.model("Tenant", tenantSchema);

module.exports = Tenant;
