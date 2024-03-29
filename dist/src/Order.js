"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cpf_1 = __importDefault(require("./Cpf"));
const OrderItem_1 = __importDefault(require("./OrderItem"));
class Order {
    constructor(cpf) {
        this.cpf = new Cpf_1.default(cpf);
        this.orderItems = [];
    }
    getTotal() {
        let total = 0;
        for (const orderItem of this.orderItems) {
            total += orderItem.getTotal();
        }
        if (this.coupon) {
            total -= (total * this.coupon.percentage) / 100;
        }
        return total;
    }
    getFrete() {
        let volumeTotal = 0;
        let densidadeTotal = 0;
        for (const orderItem of this.orderItems) {
            volumeTotal += orderItem.dimensions.getVolume();
            densidadeTotal += orderItem.dimensions.getDensidade();
        }
        const frete = 1000 * volumeTotal * (densidadeTotal / 100);
        return frete < 10 ? 10 : frete;
    }
    addItem(item, quantity) {
        this.orderItems.push(new OrderItem_1.default(item.idItem, item.price, quantity, item.dimensions));
    }
    addCoupon(coupon) {
        this.coupon = coupon;
    }
}
exports.default = Order;
