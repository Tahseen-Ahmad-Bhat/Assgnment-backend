const express = require("express");
const { insertText } = require("../controllers/inputController");
const router = express.Router();

router.post("/text", insertText);

module.exports = router;
