const ftoc = function (number) {
  let result = (number - 32) * (5 / 9);
  return parseFloat(result.toFixed(1));
};

const ctof = function (number) {
  let result = (number * (9 / 5)) + 32;
  return parseFloat(result.toFixed(1));
};

module.exports = {
  ftoc,
  ctof
};
