const sumAll = function (firstNumber, secondNumber) {
    let result;
    if (typeof firstNumber != 'number' || typeof secondNumber != 'number' || firstNumber < 0 || secondNumber < 0) {
        result = 'ERROR';
    }
    else {
        let i;
        result = 0;
        if (firstNumber < secondNumber) {
            for (i = firstNumber; i <= secondNumber; i++) {
                result += i;
            }
        }
        else {
            for (i = secondNumber; i <= firstNumber; i++) {
                result += i;
            }
        }

    }
    return result;
};

module.exports = sumAll;
