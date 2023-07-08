const fs = require('fs')
const path = require('path')
const filePaht = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'items.json'
)

const getFileContent = (cb) => {
    fs.readFile(filePaht, (error, content) => {
        if (error) {
            cb([])
        } else {
            cb(JSON.parse(content))
        }
    })
}
module.exports = class Item {
    constructor(title) {
        this.title = title
    }

    save() {
        getFileContent(items => {
            items.push(this)
            fs.writeFile(filePaht, JSON.stringify(items), error => {
                console.log(error, "Console One")
            })
        })
    }

    static fetchAllItems(cb) {
        getFileContent(cb)
    }
}