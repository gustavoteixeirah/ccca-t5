"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coupon {
    constructor(code, percentage) {
        this.code = code;
        this.percentage = percentage;
        if (!this.isExpired(code))
            throw new Error("Cupom expirado");
    }
    isExpired(code) {
        return code === "VALE20";
    }
}
exports.default = Coupon;
