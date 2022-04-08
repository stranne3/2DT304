'use strict'

const express = require('express')
const router = express.Router()

const chartController = require('../controllers/chartController.js')

router.get('/', chartController.index)

module.exports = router