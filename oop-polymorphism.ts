//example of polymorphism (overloading method 'add')
class Calc {
    constructor() {
    }

    add(a:string, b:string): string;
    add(a:number, b:number, isNegative:boolean): string;
    add(a: any, b:any, isNegative?:boolean): string {
        return (isNegative?'-':'+') + (typeof(a) == 'number' && typeof(b) == 'number' ? a + b : a.toString() + b.toString()).toString();
    }
}

export { Calc };