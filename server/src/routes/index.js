const express = require("express");
const path = require("path");

const auth = require("./auth");
const user = require("./user");
const rooms = require("./rooms");

const router = express.Router();

router.use("/api/auth", auth);
router.use("/api/user", user);
router.use("/api/rooms", rooms);

module.exports = router;
