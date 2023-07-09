const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const adminRoute = require('./routes/admin')
const routes = require('./routes/item')
const pageNotFoundController = require('./controllers/error')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug')
app.set('views', 'views')


app.use('/admin', adminRoute)
app.use(routes)


app.use('/', (req, res) => {
    res.redirect('/items')
})

app.use(pageNotFoundController.get404)

app.listen(3000)