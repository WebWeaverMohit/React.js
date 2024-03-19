const express = require('express')
const router = express.Router()
const {home, create} = require('../controllers/userController')

router.get("/", home)

router.post("/create", create)

module.exports = router