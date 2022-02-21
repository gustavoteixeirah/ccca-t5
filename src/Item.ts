import Dimensions from "./Dimensions";

export default class Item {
    constructor(
        readonly idItem: number,
        readonly category: string,
        readonly description: string,
        readonly price: number,
        readonly dimensions: Dimensions
    ) {}
}
