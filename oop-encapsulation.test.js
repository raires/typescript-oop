const encapsulation = require('./dist/oop-encapsulation.js');

test('Test encapsulation result', () => {
    const aa = new encapsulation.A('Jest', 'Test');
    expect(aa.print()).toBe('Jest Test');
});