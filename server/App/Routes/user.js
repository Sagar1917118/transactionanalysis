const express = require("express")
const router = express.Router()
const {login} =require("../Controllers/login");
// router.post("/create-user",);
// router.post("/create-report",);
// router.post("/create-transaction",);
router.post("/login",login);

module.exports = router