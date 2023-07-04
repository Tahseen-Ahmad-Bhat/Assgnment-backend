const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const connectionLogSchema = new Schema({
  connectionCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("ConnectionLog", connectionLogSchema);
