const mongoose = require("mongoose");

const BoothSchema = new mongoose.Schema({
  boothId: String,
  status: String,
  battery: Number,
  temp: Number,
  kWh: Number
});

const StationSchema = new mongoose.Schema({
  stationId: { type: String, unique: true },
  booths: [BoothSchema],
  queue: Number,
  pricePerKWh: Number,
  lastUpdated: Date
});

module.exports = mongoose.model("Station", StationSchema);
