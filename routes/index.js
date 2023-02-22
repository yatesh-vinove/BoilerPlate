const express = require("express");
const app = express();
const router = express.Router();

app.use("/user", require("./user"));

module.exports = router;
