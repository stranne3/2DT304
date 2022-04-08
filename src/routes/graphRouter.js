'use strict'

const express = require('express')
const router = express.Router()

const graphController = require('../controllers/graphController')

router.post('/', graphController.getDay)

module.exports = router