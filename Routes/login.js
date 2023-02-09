const express = require('express')
const router = express.Router()
const {login}=require("../Controllers/login");
const {home} = require("../Controllers/home");

router.post("/login",login)
router.get("/home", home)



module.exports=router;