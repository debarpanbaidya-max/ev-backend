const router = require("express").Router();
const { updateStation } = require("../controllers/station.controller");

router.post("/update", updateStation);

module.exports = router;
