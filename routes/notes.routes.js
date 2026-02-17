const express = require("express");
const router = express.Router();
const { getData } = require("../controllers/notes.controller");

router.get("/", getData);

module.exports = router;
