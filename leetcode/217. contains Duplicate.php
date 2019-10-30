<?php
// https://leetcode.com/problems/contains-duplicate/

// 217. Contains Duplicate

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true


/**
 * @param Integer[] $nums
 * @return Boolean
 */
function containsDuplicate($nums)
{
    if (count($nums) <= 0) return false;
    return count(array_unique($nums)) !== count($nums);
}

var_dump(containsDuplicate([1, 2, 3, 1]) === true);

var_dump(containsDuplicate([1, 2, 3, 4]) === false);

var_dump(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) === true);
