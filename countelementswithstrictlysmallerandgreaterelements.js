//2148
//easy

//Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

 

//Example 1:

//Input: nums = [11,7,2,15]
//Output: 2
//Explanation: The element 7 has the element 2 strictly smaller than it and the element 11 strictly greater than it.
//Element 11 has element 7 strictly smaller than it and element 15 strictly greater than it.
//In total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.

// my own solution using javascript:

/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    let ans = 0;
    console.log(nums);
    
    for (i = 0; i < nums.length; i++) {
        if (nums[i] != Math.max(...nums) && (nums[i] != Math.min(...nums))) {
            console.log(nums[i]);
            ans++;
        }
    }
    return ans;
};
