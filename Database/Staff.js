const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    role : { type: String},
    bio : {
      type: String,
    },
    image : {
      type: String,
    },
    linkedIn : {type:String},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Staff", StaffSchema);
