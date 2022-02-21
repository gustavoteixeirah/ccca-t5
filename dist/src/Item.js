"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(idItem, category, description, price, dimensions) {
        this.idItem = idItem;
        this.category = category;
        this.description = description;
        this.price = price;
        this.dimensions = dimensions;
    }
}
exports.default = Item;
