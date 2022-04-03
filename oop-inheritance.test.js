const inheritance = require('./dist/oop-inheritance.js');

const btest = new inheritance.Bclass('a', 'b', 'c', 'd');

test('Test inheritance result', () => {
        
    //console.log(btest.print());
    expect(btest.print()).toBe('a b c d - a b');
    expect(btest.print('aa')).toBe('a b c d - aa b');
    expect(btest.print('aa', 'bb')).toBe('a b c d - aa bb');
});