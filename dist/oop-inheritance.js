"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bclass = exports.Aclass = void 0;
class Aclass {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    print() {
        return this.a + ' ' + this.b;
    }
}
exports.Aclass = Aclass;
//Bclass is a subclass of Aclass
//Bclass inherits all the properties and methods of Aclass (inheritance)
//Bclass can override and overload the properties and methods of Aclass (polymorphism)
class Bclass extends Aclass {
    constructor(a, b, c, d) {
        super(a, b);
        this.aa = a;
        this.bb = b;
        this.c = c;
        this.d = d;
    }
    print(a, b) {
        return super.print() + ' ' + this.c + ' ' + this.d + ' -' + (a ? ' ' + a : ' ' + this.aa.toString()) + (b ? ' ' + b : ' ' + this.bb.toString());
    }
}
exports.Bclass = Bclass;
const b = new Bclass('a', 'b', 'c', 'd');
console.log(b.print());
//multi level inheritance
class Cclass extends Bclass {
}
