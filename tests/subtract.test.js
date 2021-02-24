const subtract = require('../src/subtract');

test('Properly subtracts two numbers', () => {
    expect(
        subtract(3, 2)
    ).toBe(1);
});