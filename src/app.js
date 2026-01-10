const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const stationRoutes = require("./routes/station.routes");

const app = express();

// connect to database
connectDB();

app.use(cors());
app.use(express.json());

// health check
app.get("/", (req, res) => {
  res.send("EV Backend Running");
});

// register routes
app.use("/station", stationRoutes);

module.exports = app;
