
//1662
//easy

//Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

//A string is represented by an array if the array elements concatenated in order forms the string.

 

//Example 1:

//Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
//Output: true
//Explanation:
//word1 represents string "ab" + "c" -> "abc"
//word2 represents string "a" + "bc" -> "abc"
//The strings are the same, so return true.
//Example 2:

//Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
//Output: false
//Example 3:

//Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
//Output: true


// my own solution using javascript:

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let one = "";
    let two = "";
    console.log(one)
    for (i = 0; i < word1.length; i++) {
        one += word1[i];
    }
    console.log(one)
    for (i = 0; i < word2.length; i++) {
        two += word2[i];
    }
    return one == two
};
