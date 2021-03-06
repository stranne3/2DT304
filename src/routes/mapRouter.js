'use strict'

const express = require('express')
const router = express.Router()

const mapController = require('../controllers/mapController')

router.get('/', mapController.index)
router.post('/', mapController.getMap)

module.exports = router