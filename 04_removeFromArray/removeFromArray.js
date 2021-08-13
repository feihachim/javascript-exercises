const removeFromArray = function (array, ...args) {
    let result = array.slice();
    let indexElement;
    args.forEach(element => {
        if (result.includes(element)) {
            indexElement = result.indexOf(element);
            result.splice(indexElement, 1);
        }
    });
    return result;
};

module.exports = removeFromArray;
