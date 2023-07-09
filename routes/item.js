const express = require('express')
const router = express.Router()
const itemCOntroller = require('../controllers/items')

router.get('/items', itemCOntroller.allItems)
router.get('/item/:itemId', itemCOntroller.showItem)

module.exports = router