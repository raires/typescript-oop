"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
class A {
    constructor(name, lastName) {
        this._name = name;
        this._lastName = lastName;
    }
    //a shorthand for initializing these properties on the constructor would be like this:
    //constructor(private _name: string, private _lastName: string) {}
    //but it will only work if using access modifiers (private, public, protected)
    get fullName() {
        return this._name + ' ' + this._lastName;
    }
    get name() {
        return this._name;
    }
    get lastName() {
        return this._lastName;
    }
    set name(name) {
        this._name = name;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    print() {
        return this.fullName;
    }
}
exports.A = A;
//encapsulation is the process of hiding the implementation details of a class from the outside world
//by making the properties private and exposing only the methods that are needed
//example of encapsulation
let a = new A('John', 'Doe');
console.log(a.fullName);
console.log(a.name);
console.log(a.lastName);
console.log(a.name = 'Jane');
console.log(a.fullName);
