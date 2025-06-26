//1534
//easy

//Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

//A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

//0 <= i < j < k < arr.length
//|arr[i] - arr[j]| <= a
//|arr[j] - arr[k]| <= b
//|arr[i] - arr[k]| <= c
//Where |x| denotes the absolute value of x.

//Return the number of good triplets.

// my own solution using javascript:

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let ans = 0;
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            for (k = j + 1; k < arr.length; k++) {
                if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                    ans++;
                }
            }
        }
    }



    return ans;
};
