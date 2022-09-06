
const express = require("express");

const router = express.Router();

router.post("/",require("../controllers/user").createUser);

module.exports = router;