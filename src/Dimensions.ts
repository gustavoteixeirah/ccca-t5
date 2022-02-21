export default class Dimensions {
    constructor(
        readonly height: number,
        readonly width: number,
        readonly depth: number,
        readonly weight: number
    ) {}

    getVolume() {
        return (this.height * this.width * this.depth) / 1000000;
    }

    getDensidade() {
        return this.weight / this.getVolume();
    }
}
