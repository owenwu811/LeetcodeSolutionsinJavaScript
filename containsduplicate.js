
//217 
//easy

//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

//Example 1:

//Input: nums = [1,2,3,1]

//Output: true

//Explanation:

//The element 1 occurs at the indices 0 and 3.


// my own solution using javascript

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    myset = new Set(nums);
    console.log(myset);
    if (nums.length == myset.size)
    {
        return false
    }
    return true
};