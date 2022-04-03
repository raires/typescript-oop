abstract class Sounds {
    abstract barkSound(): string;
    abstract meowSound(): string;
}

abstract class Animal extends Sounds {
    abstract name(): string;

    makeSound(): string {
        return this.barkSound();
    }
}

// don't need to implement makeSound() once abstract is used
abstract class Walk extends Animal {
}

class Dog implements Animal {
    //once Animal class is abstract, you can imlement it and have to implement all its methods/functions (makeSound()
    makeSound(): string {
        return "I'm a dog and I bark";
    }
    

    barkSound(): string {
        return 'woof';
    }

    meowSound(): string {
        return 'I do not meow';
    }

    name(): string {
        return 'Doggo';
    }
    // //it has to be implemented in the subclass
    // makeSound(): void {
    //     console.log('bark');
    // };
}




interface IDog {
    protectHouse: string;
}

interface ICat {
    doNothing: string;
}

class AnimalTask {
    returnTask(dog:IDog, cat:ICat): string {
        return `${dog.protectHouse} and ${cat.doNothing}`;
    }
}

const animalTask = new AnimalTask();
animalTask.returnTask({protectHouse: 'Dogs protect houses'}, { doNothing: 'Cats do nothing' });

export { Animal, Dog, Walk, AnimalTask };