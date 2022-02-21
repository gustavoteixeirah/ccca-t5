import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
    cpf: Cpf;
    orderItems: OrderItem[];
    coupon: Coupon | undefined;

    constructor(cpf: string) {
        this.cpf = new Cpf(cpf);
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

    getFrete(distance: number) {
        let volumeTotal = 0;
        let densidadeTotal = 0;
        for (const orderItem of this.orderItems) {
            volumeTotal += orderItem.dimensions.getVolume();
            densidadeTotal += orderItem.dimensions.getDensidade();
        }
        const frete = distance * volumeTotal * (densidadeTotal / 100);

        return frete < 10 ? 10 : frete;
    }

    addItem(item: Item, quantity: number) {
        this.orderItems.push(
            new OrderItem(item.idItem, item.price, quantity, item.dimensions)
        );
    }

    addCoupon(coupon: Coupon) {
        this.coupon = coupon;
    }
}
