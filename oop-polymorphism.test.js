const polymorphism = require('./dist/oop-polymorphism.js');

const calc = new polymorphism.Calc();

test('Test polymorphism calc results', () => {
        
    expect(calc.add('a','b')).toBe('+ab');
    expect(calc.add(1,2)).toBe('+3');
    expect(calc.add(1,2,true)).toBe('-3');
});