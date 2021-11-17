const express = require('express')
const router = express.Router()
const ProfileController = require('../Controllers/Profile.Controller')
const {verifyAccessToken} = require("../helpers/jwt_helper")

router.get('/profile', verifyAccessToken, ProfileController.getProfile)

module.exports = router