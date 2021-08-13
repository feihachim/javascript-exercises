const palindromes = function (str) {
    let result;
    let trimmedStr = str.replace(/[\s,.!]/g, '').toLowerCase();
    let arrayStr = trimmedStr.split('');
    let i = 0;
    let lengthStr = arrayStr.length;
    let halfStr = Math.floor(lengthStr / 2);
    while (i <= halfStr && arrayStr[i] == arrayStr[lengthStr - 1 - i]) {
        i++;
    }
    if (i > halfStr) {
        result = true;
    }
    else {
        result = false;
    }
    return result;
};

module.exports = palindromes;
