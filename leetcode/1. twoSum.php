<?php
/*
https://leetcode.com/problems/two-sum/

1. Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

function twoSum(array $nums, int $target): array
{
    foreach ($nums as $key => $val) {
        unset($nums[$key]);
        $nextKey = array_search(($target - $val), $nums);
        if ($nextKey) {
            return [$key, $nextKey];
        }
    }
    return [];
}

// /Test code 1
$nums = [2, 7, 11, 15];
$target = 9;
var_dump(twoSum($nums, $target) === [0, 1]);

// /Test code 2
$nums = [3, 2, 4];
$target = 6;

var_dump(twoSum($nums, $target) === [1, 2]);

// /Test code 3
$nums = [2, 5, 5, 11];
$target = 10;

var_dump(twoSum($nums, $target) === [1, 2]);
