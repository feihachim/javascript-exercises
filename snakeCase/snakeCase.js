const snakeCase = function (str) {
    let result;
    let lowerArrStr;
    let arrStr = str.match(/\w+/g);
    if (arrStr.length > 1) {
        lowerArrStr = arrStr.map(element => element.toLowerCase());
    }
    else {
        let indexUpper = arrStr[0].search(/[A-Z]/);
        let arrResult = [arrStr[0].substr(0, indexUpper), arrStr[0].substr(indexUpper)];
        lowerArrStr = arrResult.map(element => element.toLowerCase());
    }
    result = lowerArrStr.join('_');
    return result;
};

module.exports = snakeCase;
