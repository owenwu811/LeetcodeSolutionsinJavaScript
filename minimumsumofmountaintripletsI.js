
//2908
//easy

//You are given a 0-indexed array nums of integers.

//A triplet of indices (i, j, k) is a mountain if:

//i < j < k
//nums[i] < nums[j] and nums[k] < nums[j]
//Return the minimum possible sum of a mountain triplet of nums. If no such triplet exists, return -1.



// my own solution using javascript:

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    var res = Infinity;
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            for (k = j + 1; k < nums.length; k++) {
                if (nums[i] < nums[j] && nums[k] < nums[j]) {

                
                    if (nums[i] + nums[j] + nums[k] < res) {
                        res = nums[i] + nums[j] + nums[k];
                    }
            }
            }
        }
    }
    if (res == Infinity) {
        return -1;
    }
    return res;
};
