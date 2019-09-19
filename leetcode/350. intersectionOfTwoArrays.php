<?php
/*
350. Intersection of Two Arrays II

https://leetcode.com/problems/intersection-of-two-arrays-ii/

Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
*/

/**
 * @param Integer[] $nums1
 * @param Integer[] $nums2
 * @return Integer[]
 */
function intersect(array $nums1, array $nums2): array
{
    $result = [];
    $loop = $nums1;
    $target = $nums2;
    if (count($nums1) > count($nums2)) {
        $loop = $nums2;
        $target = $nums1;
    }

    foreach ($loop as $elm) {
        $key = array_search($elm, $target, false);
        if ($key !== false) {
            $result[] = $elm;
            unset($target[$key]);
        }
    }
    return $result;
}

$nums1 = [1, 2, 2, 1];
$nums2 = [2, 2];
var_dump(intersect($nums1, $nums2) === [2, 2]);

$nums1 = [4, 9, 5];
$nums2 = [9, 4, 9, 8, 4];
var_dump(intersect($nums1, $nums2) === [4, 9]);

$nums1 = [1, 2, 2, 1];
$nums2 = [2];
var_dump(intersect($nums1, $nums2) === [2]);

$nums1 = [3, 1, 2];
$nums2 = [1, 1];
var_dump(intersect($nums1, $nums2) === [1]);

$nums1 = [-2147483648, 1, 2, 3];
$nums2 = [1, -2147483648, -2147483648];
var_dump(intersect($nums1, $nums2) === [1, -2147483648]);
