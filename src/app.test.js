const { sum, sub } = require('./app');

test('sum(2, 3) returns 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('sub(5, 1) returns 4', () => {
  expect(sub(5, 1)).toBe(4);
});
