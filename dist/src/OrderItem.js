"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderItem {
    constructor(idItem, price, quantity, dimensions) {
        this.idItem = idItem;
        this.price = price;
        this.quantity = quantity;
        this.dimensions = dimensions;
    }
    getTotal() {
        return this.price * this.quantity;
    }
}
exports.default = OrderItem;
