const { sum } = require('./app');

test('sum(2, 3) returns 5', () => {
  expect(sum(2, 3)).toBe(5);
});
