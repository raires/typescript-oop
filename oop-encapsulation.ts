class A {
    private _name: string;
    private _lastName: string;
    
    constructor(name: string, lastName: string) {
        this._name = name;
        this._lastName = lastName;
    }
    //a shorthand for initializing these properties on the constructor would be like this:
    //constructor(private _name: string, private _lastName: string) {}
    //but it will only work if using access modifiers (private, public, protected)
    
    get fullName(): string {
        return this._name + ' ' + this._lastName;
    }

    get name(): string {
        return this._name;
    }

    get lastName(): string {
        return this._lastName;
    }

    set name(name: string) {
        this._name = name;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }

    public print(): string {
        return this.fullName;
    }
}

//encapsulation is the process of hiding the implementation details of a class from the outside world
//by making the properties private and exposing only the methods that are needed

//example of encapsulation
let a = new A('John', 'Doe');
console.log(a.fullName);
console.log(a.name);
console.log(a.lastName);
console.log(a.name = 'Jane');
console.log(a.fullName);

//note: the above code is not a good example of encapsulation because it exposes the implementation details of the class to the outside world
//but because of the encapsulation (privete properties), it is not possible to access the properties directly

export { A }; 