const Item = require('../models/item')
exports.createItem = (req, res) => {
    res.render('admin/index', {title: 'Add Item'})
}

exports.storeItem = (req, res) => {
    Item.create({
        name: req.body.item
    })
    .then(result => {
        res.redirect('../items')
    })
    .catch(error => {
        console.error(error, "error occure")
    })
    
}

exports.allItems = (req, res) => {
    Item.findAll()
    .then(items => {
        console.log(items, "all item")
        res.render('shops/index', {props: items, title: 'Item'})
    })
    .catch(error => {
        console.error(error, "error occure")
    })
}

exports.showItem = (req, res) => {
    Item.findByPk(req.params.itemId)
    .then(item => {
        res.render('shops/detail', {item, title: 'Item Detail'})
    })
    .catch(error => {
        console.error(error, "occure error");
    })
}