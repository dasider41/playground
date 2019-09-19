<?php
/*
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

*/

/**
 * @param Integer[] $nums
 * @param Integer $target
 * @return Integer[]
 */
function searchRange(array $nums, int $target): array
{
    $getPosition = function ($target, $array): int {
        $key = array_search($target, $array);
        if ($key !== false) {
            return $key;
        }
        return -1;
    };

    $firstPosition = $getPosition($target, $nums);
    krsort($nums);
    $lastPosition = $getPosition($target, $nums);

    return [$firstPosition, $lastPosition];
}

$nums = [5, 7, 7, 8, 8, 10];
$target = 8;
var_dump(searchRange($nums, $target) === [3, 4]);

$nums = [5, 7, 7, 8, 8, 10];
$target = 6;
var_dump(searchRange($nums, $target) === [-1, -1]);
