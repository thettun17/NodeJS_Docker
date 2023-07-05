const items = []

module.exports = class Item {
    constructor(title) {
        this.title = title
    }

    save() {
        items.push(this)
    }

    static fetchAllItems() {
        return items
    }
}