// https://leetcode.com/problems/product-of-array-except-self/

// 238. Product of Array Except Self

// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

package main

import "fmt"

func productExceptSelf(nums []int) []int {
	n := len(nums)
	result := make([]int, n)
	tmp := 1
	for i := 0; i < n; i++ {
		result[i] = tmp
		tmp *= nums[i]
	}

	tmp = 1
	for j := n - 1; j >= 0; j-- {
		result[j] *= tmp
		tmp *= nums[j]
	}

	return result
}

func main() {
	fmt.Printf("%v \n", productExceptSelf([]int{1, 2, 3, 4}))
}
