const repeatString = function (word, number) {
  let result = "";
  if (number < 0) {
    result = "ERROR";
  } else {
    if (word == "" || number == 0) {
      result = "";
    } else {
      for (let i = 1; i <= number; i++) {
        result += word;
      }
    }
  }
  return result;
};

module.exports = repeatString;
