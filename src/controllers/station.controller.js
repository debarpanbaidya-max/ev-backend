const Station = require("../models/Station");
const { logUpdate } = require("../utils/logger");

exports.updateStation = async (req, res) => {
  const data = req.body;

  // log incoming data
  logUpdate(data);

  // save/update station
  await Station.findOneAndUpdate(
    { stationId: data.stationId },
    { ...data, lastUpdated: new Date() },
    { upsert: true }
  );

  return res.status(200).json({ message: "Station update saved" });
};
