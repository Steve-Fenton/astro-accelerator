// @ts-check

/**
 * Looks for a search within a string
 * 
 * @param {string} string 
 * @param {string} search 
 * @returns 
 */
 function contains(string, search) {
    return string.indexOf(search) > -1;
}

/**
 * Simplifies a string to plain lower case, removing diacritic characters and hyphens
 * This means a search for "co-op" will be found in "COOP" and "Café" will be found in "cafe"
 * @param {string} string 
 * @returns 
 */
 function sanitise(string) {
    // @ts-ignore
    if (String.prototype.normalize) {
        // Reduces diacritic characters to plain characters
        string.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/-/g, '');
    }

    // Some browsers can't normalise strings
    return string.trim().toLowerCase().replace(/-/g, '');
}

/**
 * Sets a minimum length for a search
 * @param {string} string 
 * @returns 
 */
 function isLongEnough(string) {
    return string.length > 1;
}

/**
 * Splits a sentence into individual search terms
 * @param {string} string 
 * @returns 
 */
function explode(string) {
    return string.split(' ').filter(isLongEnough).map(sanitise);
}

export { contains, sanitise, explode };