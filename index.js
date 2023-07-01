const express = require('express')
const path = require('path')

const adminRoutes = require('./routes/admin')
const routes = require('./routes/index')


const app = express()
/**
 * 
 * Route Group Like This
 */

app.use('/admin', adminRoutes)
app.use(routes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views/layouts/', '404.html'))
})

app.listen(3000)