const mongoose = require("mongoose");

const tasklSchema = mongoose.Schema({
  name: { type: String, require: true },
  done: { type: Boolean, default: false },
  checklist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Checklist",
    require: true,
  },
});

module.exports = mongoose.model("Task", tasklSchema);
