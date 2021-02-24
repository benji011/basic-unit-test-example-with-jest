const cloneArray = require('../src/cloneArray');

test('Properly copies an array', () => {
    const test_array = [1, 2, 3];
    expect(
        cloneArray(test_array)
    ).toEqual(
        [1, 2, 3]
    );
});