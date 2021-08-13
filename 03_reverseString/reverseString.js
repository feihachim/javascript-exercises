const reverseString = function (str) {
    let result;
    let arrayResult = [];
    let strLength = str.length;
    if (!str) {
        result = '';
    }
    else {
        arrayStr = str.split('');
        for (let i = 0; i < strLength; i++) {
            arrayResult[i] = str.charAt(strLength - 1 - i);
        }
        result = arrayResult.join('');
    }
    return result;
};

module.exports = reverseString;
