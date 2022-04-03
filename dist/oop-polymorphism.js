"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calc = void 0;
//example of polymorphism (overloading method 'add')
class Calc {
    constructor() {
    }
    add(a, b, isNegative) {
        return (isNegative ? '-' : '+') + (typeof (a) == 'number' && typeof (b) == 'number' ? a + b : a.toString() + b.toString()).toString();
    }
}
exports.Calc = Calc;
