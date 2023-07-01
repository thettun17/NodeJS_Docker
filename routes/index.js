const express = require('express')
const router = express.Router()
const path = require('path')
const dirName = require('../helpers/path')

router.get('/', (req, res) => {
    res.sendFile(path.join(dirName, 'views/layouts/', 'index.html'))
})

module.exports = router