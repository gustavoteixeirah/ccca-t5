export default class Coupon {
    constructor(readonly code: string, readonly percentage: number) {
        if (!this.isExpired(code)) throw new Error("Cupom expirado");
    }

    isExpired(code: string) {
        return code === "VALE20";
    }
}
