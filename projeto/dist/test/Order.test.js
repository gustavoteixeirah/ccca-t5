"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("../src/Coupon"));
const Item_1 = __importDefault(require("../src/Item"));
const Order_1 = __importDefault(require("../src/Order"));
test('Deve criar um pedido', function () {
    const order = new Order_1.default('935.411.347-80');
    expect(order.cpf.getValue()).toBe('935.411.347-80');
    expect(order.getTotal()).toBe(0);
});
test('Não deve criar um pedido com CPF inválido', function () {
    expect(() => new Order_1.default('111.111.111-11')).toThrow(new Error('CPF Inválido'));
});
test('Deve criar um pedido com 3 itens', function () {
    const order = new Order_1.default('935.411.347-80');
    order.addItem(new Item_1.default(1, 'Instrumentos Musicais', 'Guitarra', 1000), 1);
    order.addItem(new Item_1.default(2, 'Instrumentos Musicais', 'Amplificador', 5000), 1);
    order.addItem(new Item_1.default(3, 'Instrumentos Musicais', 'Cabo', 30), 3);
    const total = order.getTotal();
    expect(total).toBe(6090);
});
test('Deve criar um pedido com 3 itens com cupom de desconto', function () {
    const order = new Order_1.default('935.411.347-80');
    order.addItem(new Item_1.default(1, 'Instrumentos Musicais', 'Guitarra', 1000), 1);
    order.addItem(new Item_1.default(2, 'Instrumentos Musicais', 'Amplificador', 5000), 1);
    order.addItem(new Item_1.default(3, 'Instrumentos Musicais', 'Cabo', 30), 3);
    const coupon = new Coupon_1.default('VALE20', 20);
    order.addCoupon(coupon);
    const total = order.getTotal();
    expect(total).toBe(4872);
});
