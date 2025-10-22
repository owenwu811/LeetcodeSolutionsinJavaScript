//2649
//medium

//Given a multi-dimensional array of integers, return a generator object which yields integers in the same order as inorder traversal.

//A multi-dimensional array is a recursive data structure that contains both integers and other multi-dimensional arrays.

//inorder traversal iterates over each array from left to right, yielding any integers it encounters or applying inorder traversal to any arrays it encounters.

//correct solution using javascript:

/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    let y = arr.flat(10 ** 5);
    for (i = 0; i < y.length; i++) {
        yield y[i];
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
