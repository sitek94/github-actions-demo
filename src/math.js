function calc(operator, a, b) {
  switch (operator) {
    case '+':
      return sum(a, b);
    case '-':
      return sub(a, b);
    default:
      throw new Error('Unsupported operator: ' + operator);
  }
}

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = {
  calc,
  sum,
  sub,
};
