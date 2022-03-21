'use strict'

const express = require('express')
const router = express.Router()

const chartController = require('../controllers/chartController')

router.get('/', chartController.index)
router.get('/getWeekData', chartController.weekData)

module.exports = router