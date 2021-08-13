const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let result;
  result = array.reduce((a, b) => a + b, 0);
  return result;
};

const multiply = function (array) {
  let result;
  if (!array) {
    result = 0;
  }
  else {
    result = array.reduce((a, b) => a * b);
  }
  return result;
};

const power = function (a, b) {
  let result = 1;
  for (let i = 1; i <= b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function (a) {
  if (a == 0) {
    return 1;
  }
  else {
    return a * factorial(a - 1);
  }
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
