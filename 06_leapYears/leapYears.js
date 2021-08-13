const leapYears = function (year) {
    let result;
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        result = true;
    }
    else {
        result = false;
    }
    return result;
};

module.exports = leapYears;
