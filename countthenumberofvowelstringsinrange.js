//2568
//easy

//You are given a 0-indexed array of string words and two integers left and right.

//A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

//Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

 

//Example 1:

//Input: words = ["are","amy","u"], left = 0, right = 2
//Output: 2
//Explanation: 
//- "are" is a vowel string because it starts with 'a' and ends with 'e'.
//- "amy" is not a vowel string because it does not end with a vowel.
//- "u" is a vowel string because it starts with 'u' and ends with 'u'.
//The number of vowel strings in the mentioned range is 2.

// my own solution using javascript:

/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let res = 0;
    for (i = 0; i < words.length; i++) {
        if (i >= left && i <= right) {

            first = words[i][0];
            last = words[i][words[i].length - 1];
            //console.log(first);
            console.log(last);
            if (words[i].length == 1) {
                if (first == 'a' || first == 'e' || first == 'i' || first == 'o' || first == 'u') {
                    res++;
                }
            }
            else if (first == 'a' || first == 'e' || first == 'i' || first == 'o' || first == 'u') {
                if (last == 'a' || last == 'e' || last == 'i' || last == 'o' || last == 'u') {
                    res++;
                }
        
            }
        }
    }
    return res;
};
