const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const admin = require('./routes/admin')
const routes = require('./routes/index')


const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug')
app.set('views', 'views')

app.use('/admin', admin.routes)
app.use(routes)

app.use((req, res, next) => {
    res.status(404).render('layouts/404', {title: "Page Not Found"})
})

app.listen(3000)