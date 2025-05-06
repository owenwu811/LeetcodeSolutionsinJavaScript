//1480
//easy

//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

//Return the running sum of nums.

 

//Example 1:

//Input: nums = [1,2,3,4]
//Output: [1,3,6,10]
//Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// my own solution using javascript:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    console.log(nums);
    for (i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};
