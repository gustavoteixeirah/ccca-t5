"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const A_1 = __importDefault(require("../src/A"));
test("Deve testar A", function () {
    const a = new A_1.default("1");
    expect(a.name).toBe("1");
});
