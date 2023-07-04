const ConnectionLog = require("../models/ConnectionLog");

exports.calculateConnections = async (req, res, next) => {
  try {
    let log = await ConnectionLog.findOne();

    if (!log) {
      // If no log entry exists, create a new one
      log = await ConnectionLog.create({});
    }

    // Increment the count and save the log entry
    log.connectionCount++;
    await log.save();
  } catch (err) {
    console.error("Error updating connection log:", err);
  }

  next();
};
