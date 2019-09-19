/*
https://leetcode.com/problems/maximum-average-subarray-i/

643. Maximum Average Subarray I

Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:

Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75


Note:

1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000].
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let max = -Infinity;
  const slicedArray = (arr, start, length) => arr.slice(start, start + length);
  const sumArray = arr => arr.reduce((acc, val) => acc + val);

  for (i = 0; i < nums.length - k + 1; i++) {
    avg = sumArray(slicedArray(nums, i, k)) / k;
    max = Math.max(max, avg);
  }

  return max;
};

const nums = [1, 12, -5, -6, 50, 3];
const k = 4;

console.log(findMaxAverage(nums, k) === 12.75);
