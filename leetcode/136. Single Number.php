<?php

// 136. Single Number
// https://leetcode.com/problems/single-number/

// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

/**
 * @param Integer[] $nums
 * @return Integer
 */
function singleNumber($nums)
{
    foreach (array_count_values($nums) as $key => $val) {
        if ($val === 1) {
            return $key;
        }
    }
    return 0;
}

$nums = [2, 2, 1];
$result = singleNumber($nums);
$except = 1;
var_dump($result);
var_dump($result === $except);

$nums = [4, 1, 2, 1, 2];
$result = singleNumber($nums);
$except = 4;
var_dump($result);
var_dump($result === $except);
