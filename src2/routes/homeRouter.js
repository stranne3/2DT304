'use strict'

const express = require('express')
const router = express.Router()

const homeController = require('../controllers/homeController.js')

router.get('/', homeController.index)
router.post('/postPos', homeController.postPos)

module.exports = router