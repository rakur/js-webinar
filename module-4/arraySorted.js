/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */
function arraySorted(items, ignore) {
    let sorted = items.map(item => {
        if (typeof item === "string")
           return item.replace(new RegExp((ignore === undefined ? "": "[" + ignore + "]*") + "\\s*", "g"), "").toLowerCase();
        return item;
    });
    let modified = Array.from(sorted);
    sorted.sort();
    for (let i = 0; i < items.length; i++) {
        if (sorted[i] !== modified[i])
            return false;
    }
    return true;
}

module.exports = arraySorted;