package main

import (
	"fmt"
	"reflect"
)

func twoSum(nums []int, target int) []int {
	m := make(map[int]int)

	for i, v := range nums {
		j, ok := m[target-v]
		if ok {
			return []int{j, i}
		}
		m[v] = i
	}

	return []int{0, 0}
}

func testEqual(result, answer []int) {
	fmt.Printf("Test result => %v\n", reflect.DeepEqual(result, answer))
}

func main() {
	// Test code 1
	testEqual(twoSum([]int{2, 7, 11, 15}, 9), []int{0, 1})

	// Test code 2
	testEqual(twoSum([]int{3, 2, 4}, 6), []int{1, 2})

	// Test code 3
	testEqual(twoSum([]int{2, 5, 5, 11}, 10), []int{1, 2})
}
