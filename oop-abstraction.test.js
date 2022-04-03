const abstraction = require('./dist/oop-abstraction.js');

describe('Test abstraction classes', () => {

    test('Test abstraction return', () => {
        const ab = new abstraction.AnimalTask();
        expect(ab.returnTask({protectHouse: 'Dogs are cool'}, { doNothing: 'Cats are cats' }))
        .toBe('Dogs are cool and Cats are cats');
    });

    test('Test abstraction return', () => {
        const dg = new abstraction.Dog();
        expect(dg.makeSound())
        .toBe("I'm a dog and I bark");
    });

});
