const fibonacci = function (number) {
    let formatNumber;
    if (number > 0) {
        formatNumber = number;
    }
    else if (parseInt(number, 10) > 0) {
        formatNumber = parseInt(number, 10);
    }
    if (formatNumber) {
        if (formatNumber == 1 || formatNumber == 2) {
            return 1;
        }
        else {
            return fibonacci(formatNumber - 1) + fibonacci(formatNumber - 2);
        }
    }
    else {
        return 'OOPS';
    }

};

module.exports = fibonacci;
