const attendance = require("./Controllers/db")
const express = require('express')
const router = express.Router()

//Return subject whose lecture is currently scheduled or coming up next
router.get("/", attendance.);

//Return subjects taught by that prof using tid
// router.get("/:id",attendance.findAll)

