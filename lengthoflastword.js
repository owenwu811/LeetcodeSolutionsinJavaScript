
//Given a string s consisting of words and spaces, return the length of the last word in the string.

//A word is a maximal 
//substring
// consisting of non-space characters only.

 

//Example 1:

//Input: s = "Hello World"
//Output: 5
//Explanation: The last word is "World" with length 5.



// my own solution using javascript:

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.split(" ")
    console.log(words)
    let res = 0;
    for (i = 0; i < words.length; i++) 
    if (words[i] != "")
        {

            res = words[i].length;
            
        }
    return res;
}
