const express = require('express')
const router = express.Router()
const path = require('path')
const dirName = require('../helpers/path')
const adminData = require('./admin')

router.get('/', (req, res) => {
    const items = adminData.items
    res.render('shops/index', {props: items, title: 'Item'})
})

module.exports = router