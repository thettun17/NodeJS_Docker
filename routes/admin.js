const express = require('express')
const router = express.Router()
const path = require('path')
const dirName = require('../helpers/path')
const items = []

router.get('/add-item', (req, res) => {
    res.render('admin/index', {title: 'Add Item'})
})

router.post('/add-item', (req, res) => {
    items.push({'title': req.body.item})
    res.redirect('../')
})

exports.routes = router
exports.items = items