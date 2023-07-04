const items = []

exports.createItem = (req, res) => {
    res.render('admin/index', {title: 'Add Item'})
}

exports.storeItem = (req, res) => {
    items.push({'title': req.body.item})
    res.redirect('../')
}

exports.allItems = (req, res) => {
    res.render('shops/index', {props: items, title: 'Item'})
}