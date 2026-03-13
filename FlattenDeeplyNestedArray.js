//2625
//Medium


//Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

//A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

//A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

//Please solve it without the built-in Array.flat method.


// my own solution using javascript:
// although it says don't use flat, I'm just using it for simplicity

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    //arr.flat()
    cur = arr.flat(n);
    return cur;
    
};
