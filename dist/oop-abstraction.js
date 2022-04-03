"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalTask = exports.Walk = exports.Dog = exports.Animal = void 0;
class Sounds {
}
class Animal extends Sounds {
    makeSound() {
        return this.barkSound();
    }
}
exports.Animal = Animal;
// don't need to implement makeSound() once abstract is used
class Walk extends Animal {
}
exports.Walk = Walk;
class Dog {
    //once Animal class is abstract, you can imlement it and have to implement all its methods/functions (makeSound()
    makeSound() {
        return "I'm a dog and I bark";
    }
    barkSound() {
        return 'woof';
    }
    meowSound() {
        return 'I do not meow';
    }
    name() {
        return 'Doggo';
    }
}
exports.Dog = Dog;
class AnimalTask {
    returnTask(dog, cat) {
        return `${dog.protectHouse} and ${cat.doNothing}`;
    }
}
exports.AnimalTask = AnimalTask;
const animalTask = new AnimalTask();
animalTask.returnTask({ protectHouse: 'Dogs protect houses' }, { doNothing: 'Cats do nothing' });
