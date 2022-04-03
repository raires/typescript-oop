const {hello} = require('./dist/index.js');

test('Test "hello" function return', () => {
    expect(hello()).toBe('Hello!!!');
});