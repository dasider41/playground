<?php
// 268. Missing Number

// https://leetcode.com/problems/missing-number/

// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:
// Input: [3,0,1]
// Output: 2

// Example 2:
// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

/**
 * @param Integer[] $nums
 * @return Integer
 */
function missingNumber($nums)
{
    sort($nums);
    for ($i = 1; $i < count($nums); $i++) {
        if ($nums[$i] !== $nums[$i - 1] + 1) {
            return $i;
        }
    }
    return $nums[0] !== 0 ? 0 : $nums[count($nums) - 1] + 1;
}

$nums = [3, 0, 1];
var_dump(missingNumber($nums) === 2);

$nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
var_dump(missingNumber($nums) === 8);

$nums = [1];
var_dump(missingNumber($nums) === 0);

$nums = [0];
var_dump(missingNumber($nums) === 1);

$nums = [0, 1];
var_dump(missingNumber($nums) === 2);
