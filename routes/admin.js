const express = require('express')
const router = express.Router()
const itemController = require('../controllers/items')


router.get('/add-item', itemController.createItem)

router.post('/add-item', itemController.storeItem)

module.exports = router