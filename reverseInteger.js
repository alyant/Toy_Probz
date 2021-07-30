/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0

Constraints:

-231 <= x <= 231 - 1

*/

var reverse = function(x) {
  var test = JSON.stringify(x);
  test.split("");
  var result = '';

  for (var i = test.length -1; i > -1; i--) {
    if (test[i] === '-') {
      continue;
    }
    result += test[i];
  }

  result = Number(result);

  if (x < 0) {
    result = result * -1;
  }

  if (Math.abs(result) >= 2147483648) {
    return 0;
  }

  return result;

};

// console.log(reverse(123))
// console.log(reverse(-123))
// console.log(reverse(0))
// console.log(reverse(120))