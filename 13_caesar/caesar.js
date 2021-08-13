const caesar = function (str, factor) {
    function charCaesar(char) {
        let newNumber = factor % 26;
        if (newNumber < 0) {
            newNumber += 26;
        }
        let ascii = char.charCodeAt(0);
        let result;
        if (ascii >= 65 && ascii <= 90) {
            result = ascii + newNumber;
            if (result > 90) {
                result -= 26;
            }
        }
        else if (ascii >= 97 && ascii <= 122) {
            result = ascii + newNumber;
            if (result > 122) {
                result -= 26;
            }
        }
        else {
            result = ascii;
        }
        return String.fromCharCode(result);
    }
    let arrayStr = str.split('');
    let arrayResult = arrayStr.map(charCaesar);
    let result = arrayResult.join('');
    return result;
};

module.exports = caesar;
