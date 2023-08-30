const express = require('express');
const router = express.Router();
const {handleSingUp,handleLogin} = require("../controllers/user")


router.post('/signup', handleSingUp)

router.post("/login",handleLogin)






module.exports = router