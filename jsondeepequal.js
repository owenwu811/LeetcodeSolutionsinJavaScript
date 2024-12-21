
//2628
//medium

//Given two values o1 and o2, return a boolean value indicating whether two values, o1 and o2, are deeply equal.

//For two values to be deeply equal, the following conditions must be met:

//If both values are primitive types, they are deeply equal if they pass the === equality check.

//If both values are arrays, they are deeply equal if they have the same elements in the same order, and each element is also deeply equal according to these conditions.

//If both values are objects, they are deeply equal if they have the same keys, and the associated values for each key are also deeply equal according to these conditions.

//You may assume both values are the output of JSON.parse. In other words, they are valid JSON.

 

//Example 1:

//Input: o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2}
//Output: true
//Explanation: The keys and values match exactly.



// my own solution using javascript:


/**
 * @param {null|boolean|number|string|Array|Object} o1
 * @param {null|boolean|number|string|Array|Object} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
    let a = o1;
    let b = o2;
    return _.isEqual(o1, o2)
};
