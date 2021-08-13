const findTheOldest = function (array) {
    function isDead(element, index, array) {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        if (!element.yearOfDeath) {
            element.yearOfDeath = currentYear;
        }
        return element.yearOfDeath;
    }
    let result;

    let arrayAge = array.filter(isDead)
        .map(element => element.yearOfDeath - element.yearOfBirth);
    let maxAge = Math.max(...arrayAge);
    let indexMaxAge = arrayAge.indexOf(maxAge);
    result = array[indexMaxAge];
    return result;
};

module.exports = findTheOldest;
