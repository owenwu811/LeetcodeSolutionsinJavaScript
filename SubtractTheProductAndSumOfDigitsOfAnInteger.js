//1281
//easy

//Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

//Example 1:

//Input: n = 234
//Output: 15 
//Explanation: 
//Product of digits = 2 * 3 * 4 = 24 
//Sum of digits = 2 + 3 + 4 = 9 
//Result = 24 - 9 = 15


// my own solution using javascript:

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let h = String(n);
    var totprod = 1;
    var totsum = 0;
    for (i = 0; i < h.length; i++) {


        totprod = totprod * Number(h[i]);
        totsum += Number(h[i]);
    }
    return totprod - totsum;


};
