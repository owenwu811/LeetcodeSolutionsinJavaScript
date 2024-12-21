
//2633
//medium


//Given a value, return a valid JSON string of that value. The value can be a string, number, array, object, boolean, or null. The returned string should not include extra spaces. The order of keys should be the same as the order returned by Object.keys().



//Example 1:

//Input: object = {"y":1,"x":2}
//Output: {"y":1,"x":2}
//Explanation: 
//Return the JSON representation.
//Note that the order of keys should be the same as the order returned by Object.keys().


//my own simple solution using javascript:

/**
 * @param {null|boolean|number|string|Array|Object} object
 * @return {string}
 */
var jsonStringify = function(object) {
    return JSON.stringify(object)
};
