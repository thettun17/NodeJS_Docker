const Item = require('../models/item')
exports.createItem = (req, res) => {
    res.render('admin/index', {title: 'Add Item'})
}

exports.storeItem = (req, res) => {
    const item = new Item(req.body.item)
    item.save()
    res.redirect('../')
}

exports.allItems = (req, res) => {
    const items = Item.fetchAllItems(items => {
        res.render('shops/index', {props: items, title: 'Item'})
    })
}

exports.showItem = (req, res) => {
    res.render('shops/detail', {title: 'Item Detail'})
}