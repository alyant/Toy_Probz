/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/



// var twoSum = function(nums, target, a = 0, b = 1) {
//     if ( (nums[a] + nums[b]) === target) {
//         result = [a, b]
//         return result;
//     }

//     b > nums.length ? a += 1 : a;
//     b > nums.length ? b = a : b;

//     return twoSum(nums, target, a, b + 1);

// };

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) {
          continue;
      }
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j];
          }
      }
  }

};

// console.log(twoSum([2,7,11,15], 9))

// console.log(twoSum([3,2,4], 6))

// console.log(twoSum([2,5,5,11],10))

// console.log(twoSum([0,4,3,0], 0))

// console.log(twoSum([-3,4,3,90], 0))