class Aclass {
    private a: string;
    private b: string;
    
    constructor(a: string, b: string) {
        this.a = a;
        this.b = b;
    }

    print(): string {
        return this.a + ' ' + this.b;
    }
}

//Bclass is a subclass of Aclass
//Bclass inherits all the properties and methods of Aclass (inheritance)
//Bclass can override and overload the properties and methods of Aclass (polymorphism)
class Bclass extends Aclass {
    private aa: any;
    private bb: any;
    private c: string;
    private d: string;

    constructor(a: string, b: string, c: string, d: string) {
        super(a, b);
        this.aa = a;
        this.bb = b;
        this.c = c;
        this.d = d;
    }

    //overriding and overloading the print method
    print():string; // overloading the print method
    print(a:string, b:string):string; //overriding the print method
    print(a?: any, b?:any):string { //implementing the overloading and overriding 
        return super.print() + ' ' + this.c + ' ' + this.d + ' -' + (a ? ' ' + a : ' ' + this.aa.toString()) + (b ? ' ' + b : ' ' + this.bb.toString());
    }
}

const b = new Bclass('a', 'b', 'c', 'd');
console.log(b.print());

//multi level inheritance
class Cclass extends Bclass {}

//multiple inheritance is not supported in TypeScript
//class Dclass extends Cclass, Bclass {}

export { Aclass, Bclass };