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
package main

import (
	"fmt"
	"sort"
)

func searchRange(nums []int, target int) []int {
	first := findArray(nums, target)
	if first == -1 {
		return []int{-1, -1}
	}

	sort.Sort(sort.Reverse(sort.IntSlice(nums)))

	second := len(nums) - 1 - findArray(nums, target)
	return []int{first, second}
}

func findArray(arr []int, target int) int {
	for i, v := range arr {
		if v == target {
			return i
		}
	}
	return -1
}

func main() {
	fmt.Printf("%v \n", searchRange([]int{5, 7, 7, 8, 8, 10}, 8)) // [3 4]
	fmt.Printf("%v \n", searchRange([]int{5, 7, 7, 8, 8, 10}, 6)) // [-1 -1]
	fmt.Printf("%v \n", searchRange([]int{3, 3, 3}, 3))           // [0 2]
}
