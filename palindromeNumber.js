/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example 1:

Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false

Constraints:

-231 <= x <= 231 - 1

Follow up: Could you solve it without converting the integer to a string?

*/

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  var test = JSON.stringify(x);
  var result = '';
   for (var i = test.length - 1; i > -1; i--) {
    result += test[i];
   }

   return Number(result) === x ? true : false;
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(123))
console.log(isPalindrome(120021))