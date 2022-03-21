'use strict'

const express = require('express')
const router = express.Router()

const graphController = require('../controllers/graphController')

router.get('/', graphController.getWeek)

module.exports = router