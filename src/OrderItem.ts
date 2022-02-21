import Dimensions from "./Dimensions";

export default class OrderItem {
    constructor(
        readonly idItem: number,
        readonly price: number,
        readonly quantity: number,
        readonly dimensions: Dimensions
    ) {}

    getTotal() {
        return this.price * this.quantity;
    }
}
