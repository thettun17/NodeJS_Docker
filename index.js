const express = require('express')
const path = require('path')
const sequelize = require('./config/database')
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

sequelize.sync()
.then(result => {
    app.listen(3000)
    console.log("successfully conneected to Database")
})
.catch(error => {
    console.error("error occure in connection to database")
    console.error(error)
})