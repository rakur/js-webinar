/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in any array, using console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */
function arrayEquals(first, second) {
    if (first.length !== second.length) {
        console.warn("different size " + first.length + " " + second.length)
        return false;
    }
    for (let i=0;i<Math.max(first.length, second.length); i++) {
        if (typeof first[i] == "object" && typeof first[i] == typeof second[i]) {
            return arrayEquals(first[i], second[i]);
        }
        if (first[i] !== second[i]) {
            console.warn("different value " + first[i] + " " + second[i]) 
            return false;
        }
    }
    return true;
}

module.exports = arrayEquals;