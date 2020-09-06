const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema({
  version: Number,
  SNR: Number,
  timer: [Number],
  result: String,
  date: String,
});

mongoose.model("datas", dataSchema);
