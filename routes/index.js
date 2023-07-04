const express = require('express')
const router = express.Router()
const itemCOntroller = require('../controllers/items')

router.get('/', itemCOntroller.allItems)

module.exports = router